<template>
  <RouterLink :to="link" class="button-large">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, RouteLocationRaw } from 'vue-router';

type Props = {
  link: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>


<style lang="scss" scoped>
@import '@/assets/scss/variables';

.button-large {
  font-size: 16px;
  font-weight: bold;
  color: $black;
  border-bottom: 3px solid $black;
  position: relative;
  transition: 0.3s all;
  width: fit-content;
  padding: 8px 40px 8px 0;
  &:after{
    position: absolute;
    content: url('/img/icons/icon_chevron-right-solid.svg');
    width: 8px;
    height: 12px;
    right: 0;
    transition: 0.3s all;
  }
  &:hover{
    border-bottom: 3px solid $green-light;
    padding: 8px 56px 8px 0;
  }
}
</style>