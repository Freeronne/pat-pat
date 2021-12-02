<template>
  <header class="flex--center">
    <nuxt-link
      v-for="menuLink in menuLinks"
      :key="menuLink.label"
      :to="menuLink.path"
      class="px-10 py-4 fs--base text--no-decoration text--uppercase"
    >
      {{ menuLink.label }}
    </nuxt-link>

    <div class="d-flex align--center ml-5">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale"
        :to="switchLocalePath(locale)"
        class="fs--base text--no-decoration text--uppercase"
      >
        {{ locale }}
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HeaderMixin from '~/mixins/layouts/default/header-mixin'

@Component
export default class DesktopHeaderComponent extends mixins(HeaderMixin) {}
</script>

<style scoped lang="scss">
header {
  height: 13.1rem;
  background-color: var(--color-header);

  a.nuxt-link-exact-active {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }
}
</style>
