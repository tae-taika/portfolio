<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="footer">
    <div class="footer__inner">
      <RouterLink to="/" class="footer__link-item">TOP</RouterLink>
      <RouterLink to="/works" class="footer__link-item">Work</RouterLink>
      <RouterLink to="/profile" class="footer__link-item">Profile</RouterLink>
    </div>
    <div class="footer__copyright">2023 Miho Tanabe All rights reserved.</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.footer {
  background-color: $beige-light;
  width: 100vw;
  padding: 40px 0 16px;
  font-family: $en-font;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 40px;
  text-align: center;
  &__inner{
    color: $black;
    display: grid;
    grid-template-columns: repeat(4,max-content);
    justify-content: center;
    column-gap: 40px;
    padding: 40px 0;
  }
  &__link-item{
    @include mediaQuery(lg){
      font-size: 18px;
    }
    @include mediaQuery(sm){
      font-size: 14px;
    }
  }
  &__copyright{
    color: $gray-light;
    @include mediaQuery(lg){
      font-size: 14px;
    }
    @include mediaQuery(sm){
      font-size: 12px;
    }
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