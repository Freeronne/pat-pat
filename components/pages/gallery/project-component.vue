<template>
  <div class="project" :style="{ width }">
    <img :src="project.image" :alt="project.title" class="image-card" :style="{ borderColor: project.color }">
    <p>{{ project.title }}</p>
    <p>{{ project.description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Project } from '~/types/pages/gallery'
import { ProjectSize } from '~/constants/pages/gallery'

@Component
export default class GalleryPage extends Vue {
  @Prop({ type: Object, required: true }) project!: Project;

  get width() {
    const baseWidth = this.$screen.lg ? 30 : 45;
    const unit = '%';

    switch (this.project.size) {
      case ProjectSize.Base:
        return `${baseWidth}${unit}`;
      case ProjectSize.Large:
        return `${this.$screen.lg ? baseWidth * 2 : baseWidth}${unit}`;
      default:
        return baseWidth;
    }
  }
}
</script>

<style lang="scss">
.project {
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
