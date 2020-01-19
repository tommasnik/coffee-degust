<template>
  <div class="coffee-detail">
    <h1>{{ coffee.name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    coffee: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.coffee-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
