<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__logo">
        <RouterLink to="/" class="header__logo">
          <img src="/img/logo.svg" width="180" height="44">
        </RouterLink>
      </div>
      <div class="header__link-wrapper">
        <RouterLink to="/" class="header__link-item">TOP</RouterLink>
        <RouterLink to="/works" class="header__link-item">Works</RouterLink>
        <RouterLink to="/profile" class="header__link-item">Profile</RouterLink>        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.header {
  background-color: $beige-light;
  width: 100vw;
  font-family: $en-font;
  &__inner{
    padding: 0 80px;
    height: 80px;
    color: $black;
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    @include mediaQuery(sm){
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr max-content;
      align-items: center;
      justify-content: center;
      height: auto;
    }
  }
  &__logo{
    display: inline-block;
    @include mediaQuery(sm){
      text-align: center;
      padding: 4px 0 0;
    }
  }
  &__link-wrapper{
    color: $black;
    display: grid;
    grid-template-columns: repeat(3,max-content);
    column-gap: 16px;
    @include mediaQuery(sm){
      justify-content: center;
      font-size: 14px;
      padding: 12px 0;
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

  //左から出したい場合
.left-enter-active, .left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.left-enter, .left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
}
</style>