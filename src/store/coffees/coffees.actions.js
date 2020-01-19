import UserCoffeesDb from '@/firebase/user-coffees-db'

export default {
  /**
   * Fetch coffees of current loggedin user
   */
  getUserCoffees: async ({ rootState, commit }) => {
    const userCoffeeDb = new UserCoffeesDb(rootState.authentication.user.id)

    const coffees = await userCoffeeDb.readAll()
    commit('setCoffees', coffees)
  },

  /**
   * Create a coffee for current loggedin user
   */
  createUserCoffee: async ({ commit, rootState }, coffee) => {
    const userCoffeeDb = new UserCoffeesDb(rootState.authentication.user.id)

    commit('setCoffeeCreationPending', true)
    const createdCoffee = await userCoffeeDb.create(coffee)
    commit('addCoffee', createdCoffee)
    commit('setCoffeeCreationPending', false)
  },

  /**
   * Create a new coffee for current loggedin user and reset coffee name input
   */
  triggerAddCoffeeAction: ({ dispatch, state, commit }) => {
    if (state.coffeeNameToCreate === '') return

    const coffee = { name: state.coffeeNameToCreate }
    commit('setCoffeeNameToCreate', '')
    dispatch('createUserCoffee', coffee)
  },

  /**
   * Delete a user coffee from its id
   */
  deleteUserCoffee: async ({ rootState, commit, getters }, coffeeId) => {
    if (getters.isCoffeeDeletionPending(coffeeId)) return

    const userCoffeesDb = new UserCoffeesDb(rootState.authentication.user.id)

    commit('addCoffeeDeletionPending', coffeeId)
    await userCoffeesDb.delete(coffeeId)
    commit('removeCoffeeById', coffeeId)
    commit('removeCoffeeDeletionPending', coffeeId)
  }
}
