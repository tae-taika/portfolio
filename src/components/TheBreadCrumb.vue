<script setup lang="ts">
import { RouterLink, RouteLocationRaw } from 'vue-router';
type Item = {
  label: string;
  url?: RouteLocationRaw;
}
type Props = {
  items: Array<Item>,
}
const props = defineProps<Props>();
</script>

<template>
  <nav class="bread-crumb">
    <ol>
      <template v-for="item in items" :key="item">
        <li class="bread-crumb-item">
          <RouterLink :to="item.url" class="bread-crumb__item-inner">
            {{ item.label }}
          </RouterLink>
        </li>
      </template>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.bread-crumb {
  
}
</style>