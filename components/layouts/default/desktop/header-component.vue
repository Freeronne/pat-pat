<template>
  <header>
    <div class="header-container container full-height d-flex justify--space-between align--center">
      <router-link :to="homeLink">
        <img src="@/assets/layout/default/logo.png" alt="" class="logo">
      </router-link>

      <div class="d-flex">
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
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import HeaderMixin from '~/mixins/layouts/default/header-mixin'
import { Routes } from '~/constants/routes'

@Component
export default class DesktopHeaderComponent extends mixins(HeaderMixin) {
  get homeLink() {
    return this.localePath(Routes.Home.name, this.$i18n.locale);
  }
}
</script>

<style scoped lang="scss">
header {
  height: 13.1rem;
  background-color: var(--color-header);

  .header-container {
    $logo-width: 11rem;

    &::after {
      content: '';
      width: $logo-width;
    }

    .logo {
      width: $logo-width;
    }

    a.nuxt-link-exact-active {
      text-decoration: underline;
      text-underline-offset: 0.3rem;
    }
  }
}
</style>
