<template>
  <div class="page-wrapper">
    <h1 class="coffees-page-title">Coffees page</h1>
    <coffee-list class="coffee-list"></coffee-list>
    <add-coffee v-if="networkOnLine"></add-coffee>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoffeeList from '@/components/CoffeeList'
import AddCoffee from '@/components/AddCoffee'

export default {
  components: { CoffeeList, AddCoffee },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.coffees-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.coffee-list {
  margin: 20px 0;
}
</style>
