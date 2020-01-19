import GenericDB from './generic-db'

export default class UserCoffeesDb extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/coffees`)
  }

  // Here you can extend UserCoffeesDb with custom methods
}
