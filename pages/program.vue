<template>
  <div class="home-page">
    <img src="@/assets/pages/home/tree.png" alt="" class="tree-image">

    <div class="card">
      <h1 class="text--primary">{{ $t('pages.program.title') }}</h1>
      <ul>
        <li v-for="text in $t('pages.program.texts')" :key="text" class="mb-5">{{ text }}</li>
      </ul>

      <h2 class="text--secondary">{{ $t('pages.program.workshops.title') }}</h2>
      <p v-for="text in $t('pages.program.workshops.texts')" :key="text" v-html="text" class="mb-5" />
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
      title: this.$t('pages.program.head.title') as string,
      description: this.$t('pages.program.head.description') as string,
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
}
</style>
