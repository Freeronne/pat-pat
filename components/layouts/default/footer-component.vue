<template>
  <header>
    <p>Footer</p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HeaderComponent extends Vue {}
</script>

<style scoped lang="scss">
header {
  height: 17rem;
  background-color: var(--color-footer);
}
</style>
