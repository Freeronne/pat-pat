<template>
  <div class="mobile-header-wrapper">
    <header class="d-flex justify--space-between align--center full-height">
      <router-link :to="homeLink">
        <img src="@/assets/layout/default/logo.png" alt="" class="logo">
      </router-link>

      <button
        type="button"
        id="menu-toggle"
        class="menu-burger"
        :class="{ 'menu-burger--is-active': isMenuActive }"
        @click="toggleMenuActive"
      >
        <i>Show Menu</i>
      </button>
    </header>

    <transition name="mobile-menu">
      <div v-if="isMenuActive" class="mobile-menu flex--center flex--column">
        <nuxt-link
          v-for="menuLink in menuLinks"
          :key="menuLink.label"
          :to="menuLink.path"
          :class="linksClasses"
        >
          {{ menuLink.label }}
        </nuxt-link>

        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale"
          :to="switchLocalePath(locale)"
          :class="linksClasses"
        >
          {{ locale }}
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Watch } from 'nuxt-property-decorator';
import { Routes } from '~/constants/routes'
import HeaderMixin from '~/mixins/layouts/default/header-mixin'

@Component
export default class MobileHeaderComponent extends mixins(HeaderMixin) {
  isMenuActive = false;

  @Watch('$route')
  onRouteChanged() {
    if (this.isMenuActive) this.isMenuActive = false;
  }

  toggleMenuActive() {
    this.isMenuActive = !this.isMenuActive;
  }

  get homeLink() {
    return this.localePath(Routes.Home.name, this.$i18n.locale);
  }

  get linksClasses() {
    return 'py-4 fs--large text--no-decoration text--uppercase'
  }
}
</script>

<style scoped lang="scss">
$mobile-header-height: 6rem;

.mobile-header-wrapper {
  height: $mobile-header-height;
  background-color: var(--color-header);

  header {
    z-index: 1;

    .logo {
      width: 4rem;
    }

    .menu-burger {
      width: 20px;
      height: 14px;
      position: relative;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      transition: 0.2s;
      transition-delay: 0.15s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        height: 0;
        border-bottom: 2px solid var(--color-primary);
        width: 100%;
        left: 0;
        right: 0;
        transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transform-origin: right bottom;
      }

      &::after {
        top: 100%;
        transform-origin: right bottom;
      }

      i {
        display: block;
        text-indent: 100%;
        overflow: hidden;
        white-space: nowrap;
        height: 2px;
        background-color: var(--color-primary);
        width: 100%;
        position: absolute;
        top: 50%;
        transition: 0.3s;
        transition-delay: 0.2s;
      }

      &--is-active {
        transform: translate3d(0, 0, 0);
        transition-delay: 0.2s;

        i {
          opacity: 0;
          transition-delay: 0s;
        }

        &::before {
          transform: rotate3d(0, 0, 1, -45deg) translate3d(0, 0, 0);
        }

        &::after {
          transform: rotate3d(0, 0, 1, 45deg) translate3d(-1px, 1px, 0);
        }
      }
    }

    button {
      padding: 0;
      border: 0;
      outline: 0;
      background: none;
    }
  }

  .mobile-menu {
    z-index: 10;
    position: fixed;
    top: $mobile-header-height;
    left: 0;
    width: 100%;
    height: calc(100% - #{$mobile-header-height});
    background-color: var(--color-primary);
    color: var(--color-white);

    &-enter-active {
      transition: all .3s ease;
    }

    &-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    &-enter,
    &-leave-to {
      height: 0;
      opacity: 0;
    }
  }
}
</style>
