<template>
  <div class="page-wrapper">
    <coffee-detail
      v-if="currentCoffee"
      :coffee="currentCoffee"
    ></coffee-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CoffeeDetail from '@/components/CoffeeDetail'

export default {
  components: { CoffeeDetail },
  props: {
    id: String
  },
  computed: {
    ...mapGetters('coffees', ['getCoffeeById']),
    currentCoffee() {
      return this.getCoffeeById(this.id)
    }
  }
}
</script>
