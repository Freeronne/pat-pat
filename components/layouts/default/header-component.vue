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
import { Component, Vue } from 'nuxt-property-decorator';
import { Routes } from '~/constants/routes'

@Component
export default class HeaderComponent extends Vue {
  get menuLinks() {
    return [
      {
        label: this.$t('layouts.default.header.menu-links.home'),
        path: this.localePath(Routes.Home.name),
      },
      {
        label: this.$t('layouts.default.header.menu-links.gallery'),
        path: this.localePath(Routes.Gallery.name),
      },
      {
        label: this.$t('layouts.default.header.menu-links.people'),
        path: this.localePath(Routes.People.name),
      },
      {
        label: this.$t('layouts.default.header.menu-links.contact'),
        path: this.localePath(Routes.Contact.name),
      },
    ];
  }

  get availableLocales() {
    return (this.$i18n.locales as string[]).filter(i => i !== this.$i18n.locale);
  }
}
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
