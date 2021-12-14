<template>
  <div class="d-flex justify--space-between align--center" :class="{ 'flex--column': !$screen.lg }">
    <div class="img-wrapper">
      <img src="@/assets/pages/contact/illustration.png" alt="" :class="{ 'mb-12': !$screen.lg }">
    </div>

    <div class="card-container">
      <h1 class="contact-title text--center extra-bold">{{ $t('pages.contact.title') }}</h1>

      <div class="card">
        <p v-for="text in $t('pages.contact.texts')" :key="text" v-html="text" class="mb-4 fs--medium" />

        <img src="@/assets/pages/contact/card-birds.png" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ContactPage extends Vue {}
</script>

<style scoped lang="scss">
.img-wrapper {
  width: 30%;

  @include media-max('lg') {
    width: 60%;
  }

  @include media-max('md') {
    width: 75%;
  }

  img {
    width: 100%;
  }
}

.card-container {
  width: 60%;

  @include media-max('lg') {
    width: 100%;

    .card {
      img {
        position: relative;
        width: 100%;
        transform: inherit;
      }
    }
  }

  .contact-title {
    color: #518CA4;
  }

  .card {
    position: relative;

    img {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 60%;
    }
  }
}
</style>
