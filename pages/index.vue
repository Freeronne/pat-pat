<template>
  <div class="home-page">
    <img src="@/assets/pages/home/tree.png" alt="" class="tree-image">

    <div class="welcome-card card mb-8">
      <h1 class="text--primary">{{ $t('pages.home.title') }}</h1>
      <p class="mb-8">{{ $t('pages.home.subtitle') }}</p>

      <div v-for="list in $t('pages.home.lists')" :key="list.label">
        <p class="bold">{{ list.label }}</p>
        <ul>
          <li v-for="item in list.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <img src="@/assets/pages/common/birds.png" alt="" class="birds-image">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { HeadValues } from '~/types/seo'

@Component
export default class HomePage extends Vue {
  head() {
    return {
      title: this.headValues.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.headValues.description,
        },
      ],
    }
  }

  get headValues(): HeadValues {
    return {
      title: this.$t('pages.home.head.title') as string,
      description: this.$t('pages.home.head.description') as string,
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  position: relative;
  padding-left: 40rem;

  @include media-max('xl') {
    padding-left: 26rem;
  }

  @include media-max('lg') {
    padding-left: 0;
  }

  .tree-image {
    z-index: 1;
    position: absolute;
    top: 6rem;
    left: -3rem;
    width: 46rem;

    @include media-max('xl') {
      left: 0;
      width: 29.5rem;
    }

    @include media-max('lg') {
      display: none;
    }
  }

  .welcome-card {
    @include media-max('md') {
      padding-bottom: 16rem;
    }

    .birds-image {
      position: absolute;
      bottom: -0.8rem;
      right: 0;
      width: 36rem;

      @include media-max('xl') {
        width: 32rem;
        bottom: 1rem;
      }

      @include media-max('sm') {
        width: 75%;
      }
    }
  }
}
</style>
