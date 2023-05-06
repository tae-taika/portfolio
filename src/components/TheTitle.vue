<template>
  <h1 class="title"><slot /></h1>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.title{
  font-family: $en-font;
  font-size: 42px;
  text-align: center;
  @include mediaQuery(sm){
    font-size: 28px;
  }
}
</style>