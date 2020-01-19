<template>
  <div>
    <p v-if="coffees === null" class="infos-label">Loading...</p>
    <p v-if="coffees && !coffees.length" class="infos-label">
      You don't have any coffee yet
    </p>
    <coffee-item
      v-for="(coffee, index) in coffees"
      :key="coffee.id"
      class="coffee-row"
      :index="index"
      :is-coffee-deletion-pending="isCoffeeDeletionPending(coffee.id)"
      :disable-actions="!networkOnLine"
      :data="coffee"
      @deleteCoffee="deleteUserCoffee"
    ></coffee-item>
  </div>
</template>

<script>
import CoffeeItem from '@/components/CoffeeItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { CoffeeItem },
  computed: {
    ...mapGetters('coffees', ['isCoffeeDeletionPending']),
    ...mapState('coffees', ['coffees']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: mapActions('coffees', ['deleteUserCoffee'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.coffee-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
