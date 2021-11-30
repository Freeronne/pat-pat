<template>
  <footer>
    <div class="container d-flex justify--space-between align--center full-height">
      <div>
        <p>{{ $t('layouts.default.footer.logo-text') }}</p>
      </div>

      <div>
        <p>{{ $t('layouts.default.footer.instagram-text') }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HeaderComponent extends Vue {}
</script>

<style scoped lang="scss">
footer {
  height: 17rem;
  background-color: var(--color-footer);
  color: var(--color-white);
}
</style>
