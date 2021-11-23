<template>
  <header>
    <p>Header</p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HeaderComponent extends Vue {}
</script>

<style scoped lang="scss">
header {
  height: 23.6rem;
  background-color: var(--color-menu);
}
</style>
