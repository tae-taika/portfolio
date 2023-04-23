<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <div class="header__inner">
      <RouterLink to="/" class="header__link-item">TOP</RouterLink>
      <RouterLink to="/works" class="header__link-item">Work</RouterLink>
      <RouterLink to="/skill" class="header__link-item">Skill</RouterLink>
      <RouterLink to="/profile" class="header__link-item">Profile</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.header {
  background-color: $beige-light;
  width: 100vw;
  height: 80px;
  font-family: $en-font;
  display: flex;
  align-items: center;
  justify-content: end;
  position: sticky;
  top: 0;
  z-index: 1;
  &__inner{
    padding: 0 80px;
    color: $black;
    display: grid;
    grid-template-columns: repeat(4,max-content);
    column-gap: 16px;
  }
  a{
    color: $gray-light;
    text-decoration: none;
  }
  a:active{
    color: $gray-light;
  }
  a:visited{
    color: $gray-light;
  }
  a:hover{
    color: $green-light;
  }
}
</style>