<template>
  <div class="coffee-item">
    <router-link
      class="coffee-link"
      :to="{ name: 'coffee', params: { id: data.id } }"
    >
      #{{ index }} {{ data.name }}
    </router-link>
    <div
      v-if="!disableActions"
      class="delete-btn"
      @click="$emit('deleteCoffee', data.id)"
    >
      {{ isCoffeeDeletionPending ? 'delete in progress...' : 'delete' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    isCoffeeDeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.coffee-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .coffee-link {
    color: $vue-color;
  }

  .delete-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: $danger-color;
    border-color: $danger-color;
  }
}
</style>
