<template>
  <div class="default-layout">
    <header-component />
    <div class="content-wrapper">
      <div class="content container py-8">
        <nuxt />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HeaderComponent from '~/components/layouts/default/header-component.vue'
import FooterComponent from '~/components/layouts/default/footer-component.vue'

@Component({
  components: { FooterComponent, HeaderComponent },
})
export default class DefaultLayout extends Vue {}
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content-wrapper {
    flex: 1;
    background-color: #f4f2ea; // TODO: Update with background image

    .content {
      color: var(--color-base-text);
    }
  }
}
</style>
