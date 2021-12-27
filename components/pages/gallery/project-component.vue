<template>
  <div class="project" :style="{ width }">
    <img :src="project.image" :alt="project.title" class="image-card" :style="{ borderColor: project.color }">
    <p class="my-5 bold text--uppercase" :style="{ color: project.color }">{{ project.title }}</p>
    <p class="m-0">{{ project.description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Project } from '~/types/pages/gallery'

@Component
export default class GalleryPage extends Vue {
  @Prop({ type: Object, required: true }) project!: Project;

  get width() {
    if (this.$screen.lg) {
      return this.project.width;
    } else if (this.$screen.md) {
      return '45%';
    } else {
      return '100%';
    }
  }
}
</script>

<style lang="scss">
.project {
  margin: 0 auto 4.8rem;

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 31rem;
    border-width: 0.7rem;
    border-style: solid;
    border-radius: 3rem;
  }
}
</style>
