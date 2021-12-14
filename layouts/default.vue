<template>
  <div class="default-layout">
    <desktop-header-component v-if="$screen.lg" />
    <mobile-header-component v-else :class="paddingClass" />

    <div class="content-wrapper">
      <div class="content container py-16" :class="paddingClass">
        <nuxt />
      </div>
    </div>

    <footer-component :class="paddingClass" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DesktopHeaderComponent from '~/components/layouts/default/desktop/header-component.vue'
import MobileHeaderComponent from '~/components/layouts/default/mobile/header-component.vue'
import FooterComponent from '~/components/layouts/default/footer-component.vue'

@Component({
  components: { DesktopHeaderComponent, FooterComponent, MobileHeaderComponent },
})
export default class DefaultLayout extends Vue {
  get paddingClass() {
    return 'px-5';
  }
}
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content-wrapper {
    flex: 1;
    background-color: #f4f2ea;
    background-image: url("~assets/layout/default/content-background.jpg");

    .content {
      color: var(--color-base-text);
    }
  }
}
</style>
