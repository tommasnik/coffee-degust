import { find } from 'lodash'

export default {
  /**
   * Check if a coffee has deletion pending
   */
  isCoffeeDeletionPending: state => coffeeId =>
    state.coffeeDeletionPending.includes(coffeeId),

  /**
   * Get coffee by id
   */
  getCoffeeById: state => coffeeId =>
    find(state.coffees, coffee => coffee.id === coffeeId)
}
