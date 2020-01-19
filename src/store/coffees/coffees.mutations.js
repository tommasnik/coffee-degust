export default {
  /* Coffee input name */
  setCoffeeNameToCreate: (state, coffeeNameToCreate) =>
    (state.coffeeNameToCreate = coffeeNameToCreate),

  /* Coffees */
  setCoffees: (state, coffees) => (state.coffees = coffees),
  addCoffee: (state, coffee) => state.coffees.push(coffee),
  removeCoffeeById: (state, coffeeId) => {
    const index = state.coffees.findIndex(coffee => coffee.id === coffeeId)
    state.coffees.splice(index, 1)
  },

  /* Coffees deletion */
  addCoffeeDeletionPending: (state, coffeeId) =>
    state.coffeeDeletionPending.push(coffeeId),
  removeCoffeeDeletionPending: (state, coffeeId) => {
    const index = state.coffees.findIndex(coffee => coffee.id === coffeeId)
    state.coffeeDeletionPending.splice(index, 1)
  },

  /* Coffee creation */
  setCoffeeCreationPending: (state, value) =>
    (state.coffeeCreationPending = value)
}
