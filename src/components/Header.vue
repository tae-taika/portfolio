<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <div class="header__inner">
      <RouterLink to="/" class="header__link-item">TOP</RouterLink>
      <RouterLink to="/works" class="header__link-item">Work</RouterLink>
      <RouterLink to="/profile" class="header__link-item">Profile</RouterLink>
      <RouterLink to="/" class="header__link-item">contact</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.header {
  background-color: $beige-light;
  width: 100vw;
  &__inner{
    padding: 40px 80px;
    color: $black;
    display: grid;
    grid-template-columns: repeat(4,max-content);
    column-gap: 16px;
    justify-content: end;
  }
  a{
    color: $black;
    text-decoration: none;
  }
  a:active{
    color: $black;
  }
  a:visited{
    color: $black;
  }
  a:hover{
    color: $black;
  }
}
</style>