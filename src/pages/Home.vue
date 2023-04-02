<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home">
    <div class="home__inner">
          <RouterLink to="/profile">プロフィールにとぶよ！</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home{
  &__inner{
    background: #F00;
  }
}
</style>
