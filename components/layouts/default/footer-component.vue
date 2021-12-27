<template>
  <footer>
    <div class="container d-flex justify--space-between align--center full-height">
      <div class="text--center">
        <router-link :to="homeLink">
          <img src="@/assets/layout/default/logo.png" alt="" class="logo mb-5">
        </router-link>
        <p>{{ $t('layouts.default.footer.logo-text') }}</p>
      </div>

      <div class="text--center">
        <a href="https://www.instagram.com/paintatreeplantatree/" target="_blank">
          <img src="@/assets/layout/default/instagram.png" alt="" class="mb-5">
        </a>
        <p>{{ $t('layouts.default.footer.instagram-text') }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Routes } from '~/constants/routes'

@Component
export default class HeaderComponent extends Vue {
  get homeLink() {
    return this.localePath(Routes.Home.name, this.$i18n.locale);
  }
}
</script>

<style scoped lang="scss">
footer {
  height: 17rem;
  background-color: var(--color-footer);
  color: var(--color-white);

  .logo {
    width: 9rem;
  }
}
</style>
