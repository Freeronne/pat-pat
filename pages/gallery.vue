<template>
  <div class="gallery-page">
    <div>
      <h1 class="fs--extra-large">{{ $t('pages.gallery.paint-a-tree.title') }}</h1>
      <h2 class="text--center fs--large">{{ $t('pages.gallery.paint-a-tree.subtitle') }}</h2>

      <div class="d-flex justify--space-between flex-wrap">
        <project-component v-for="project in paintATreeItems" :key="project.title" :project="project" />
      </div>
    </div>

    <div>
      <h1 class="fs--extra-large">{{ $t('pages.gallery.plant-a-tree.title') }}</h1>
      <h2 class="text--center fs--large">{{ $t('pages.gallery.plant-a-tree.subtitle') }}</h2>

      <div class="d-flex justify--space-between flex-wrap">
        <project-component v-for="project in plantATreeItems" :key="project.title" :project="project" />
      </div>
    </div>

    <div>
      <h3 class="fs--extra-large">{{ $t('pages.gallery.instagram.title') }}</h3>
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
        color: 'red',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
        size: ProjectSize.Base
      },
      {
        color: 'red',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
        size: ProjectSize.Base
      },
      {
        color: 'red',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
        size: ProjectSize.Base
      },
      {
        color: 'red',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
        size: ProjectSize.Large
      },
    ];
  }

  get plantATreeItems(): Project[] {
    return [
      {
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
        size: ProjectSize.Base
      },
      {
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
        size: ProjectSize.Base
      },
      {
        color: 'blue',
        image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        title: 'Title',
        description: 'Description',
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
