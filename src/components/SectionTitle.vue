<template>
  <h2 class="section-title">
    {{ title }}
    <span class="section-title__sub">{{ titlejp }}</span>
  </h2>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  titlejp: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>


<style lang="scss" scoped>
@import '@/assets/scss/variables';

.section-title{
  display: grid;
  gap: 8px;
  font-family: $en-font;
  font-size: 32px;
  text-align: center;
  &__sub{
    display: block;
    font-weight: normal;
    font-family: $jp-font;
    font-size: 18px;
  }
}
</style>