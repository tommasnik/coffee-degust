<template>
  <div class="coffee-action-bar">
    <input
      placeholder="coffee name..."
      class="coffee-name-input"
      type="text"
      :value="coffeeNameToCreate"
      @input="setCoffeeNameToCreate($event.target.value)"
      @keypress.enter="triggerAddCoffeeAction"
    />
    <div
      :class="{ disabled: coffeeCreationPending }"
      class="create-coffee-btn"
      @click="triggerAddCoffeeAction"
    >
      add coffee
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: mapState('coffees', [
    'coffeeNameToCreate',
    'coffeeCreationPending'
  ]),
  methods: {
    ...mapMutations('coffees', ['setCoffeeNameToCreate']),
    ...mapActions('coffees', ['triggerAddCoffeeAction'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.coffee-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .coffee-name-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .create-coffee-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>
