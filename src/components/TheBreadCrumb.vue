<script setup lang="ts">
import { RouterLink, RouteLocationRaw } from 'vue-router';
type Link = {
  label: string;
  url?: RouteLocationRaw;
}
type Props = {
  links: Array<Link>,
}
const props = defineProps<Props>();
</script>

<template>
  <nav class="bread-crumb">
    <ul class="bread-crumb__wrapper" role="list">
      <template v-for="link in links" :key="link">
        <li class="bread-crumb__item">
          <RouterLink v-if="link.url" :to="link.url" class="bread-crumb__item-inner">
            {{ link.label }}
          </RouterLink>
          <div v-else class="bread-crumb__item-inner">
            {{ link.label }}
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.bread-crumb {
  width: 1000px;
  margin: 0 auto;
  padding: 24px 0;
  &__wrapper{
    width: 100%;
    display: flex;
    font-size: 12px;
  }
  &__item{
    a{
      text-decoration: underline;
    }
    &::after{
      content:"/";
      padding: 0 8px;
    }
  }
  &__item:last-child{
    // font-weight: bold;
    text-decoration: none;
    &::after{
      content: none;
    }
  }
}
</style>