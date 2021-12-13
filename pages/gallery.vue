<template>
  <div class="gallery-page">
    <div>
      <h1 class="fs--extra-large">{{ $t('pages.gallery.paint-a-tree.title') }}</h1>
      <h2 class="mb-10 text--center fs--large">{{ $t('pages.gallery.paint-a-tree.subtitle') }}</h2>

      <div class="d-flex justify--space-between flex-wrap">
        <project-component v-for="project in paintATreeItems" :key="project.color" :project="project" />
      </div>
    </div>

    <div>
      <h1 class="mt-15 fs--extra-large">{{ $t('pages.gallery.plant-a-tree.title') }}</h1>
      <h2 class="mb-10 text--center fs--large">{{ $t('pages.gallery.plant-a-tree.subtitle') }}</h2>

      <div class="d-flex justify--space-between flex-wrap">
        <project-component v-for="project in plantATreeItems" :key="project.color" :project="project" />
      </div>
    </div>

    <div>
      <h3 class="mt-15 fs--extra-large">{{ $t('pages.gallery.instagram.title') }}</h3>
      <h4 class="text--center fs--large">{{ $t('pages.gallery.instagram.subtitle') }}</h4>
    </div>

    <div id="instafeed" class="instafeed-container container d-flex justify--space-between" />
  </div>
</template>

<script lang="ts">
import Instafeed from 'instafeed.js'
import { Component, Vue } from 'nuxt-property-decorator'
import { Project } from '~/types/pages/gallery'
import ProjectComponent from '~/components/pages/gallery/project-component.vue'
import { ProjectSize } from '~/constants/pages/gallery'

@Component({
  components: { ProjectComponent }
})
export default class GalleryPage extends Vue {
  mounted() {
    const feed = new Instafeed({
      accessToken: process.env.INSTAFEED_ACCESS_TOKEN,
      limit: 3,
    });
    feed.run();
  }

  get paintATreeItems(): Project[] {
    return [
      {
        color: '#E2C44B',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.paint-a-tree.projects.silver-birch-tree.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.silver-birch-tree.description') as string,
        size: ProjectSize.Base
      },
      {
        color: '#70C8E5',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.paint-a-tree.projects.red-maple-tree.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.red-maple-tree.description') as string,
        size: ProjectSize.Base
      },
      {
        color: '#D66761',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree.description') as string,
        size: ProjectSize.Base
      },
      {
        color: '#BAB6D3',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree-2.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree-2.description') as string,
        size: ProjectSize.Large
      },
    ];
  }

  get plantATreeItems(): Project[] {
    return [
      {
        color: '#7CC197',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.plant-a-tree.projects.lilac-tree.title') as string,
        description: this.$t('pages.gallery.plant-a-tree.projects.lilac-tree.description') as string,
        size: ProjectSize.Base
      },
      {
        color: '#BAB6D3',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.plant-a-tree.projects.earthworms.title') as string,
        description: this.$t('pages.gallery.plant-a-tree.projects.earthworms.description') as string,
        size: ProjectSize.Base
      },
      {
        color: '#F96464',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: this.$t('pages.gallery.plant-a-tree.projects.japanese-cherry-tree.title') as string,
        description: this.$t('pages.gallery.plant-a-tree.projects.japanese-cherry-tree.description') as string,
        size: ProjectSize.Base
      },
    ];
  }
}
</script>

<style lang="scss">
.gallery-page {
  .instafeed-container {
    a {
      width: 30%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
