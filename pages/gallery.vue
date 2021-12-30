<template>
  <div class="gallery-page">
    <div class="paint-a-tree">
      <h1>{{ $t('pages.gallery.paint-a-tree.title') }}</h1>
      <h2 class="mb-10 text--center fs--large">{{ $t('pages.gallery.paint-a-tree.subtitle') }}</h2>

      <div class="d-flex justify--center flex-wrap">
        <project-component v-for="project in paintATreeItems" :key="project.color" :project="project" />
      </div>
    </div>

    <img src="@/assets/pages/gallery/hands.png" alt="" class="hands-image">

    <div class="plant-a-tree">
      <h1>{{ $t('pages.gallery.plant-a-tree.title') }}</h1>
      <h2 class="mb-10 text--center fs--large">{{ $t('pages.gallery.plant-a-tree.subtitle') }}</h2>

      <div class="d-flex justify--center flex-wrap">
        <project-component v-for="project in plantATreeItems" :key="project.color" :project="project" />
      </div>
    </div>

    <div>
      <h3 class="fs--extra-large">{{ $t('pages.gallery.instagram.title') }}</h3>
    </div>

    <div id="instafeed" class="instafeed-container container d-flex flex-wrap justify--space-between" />
  </div>
</template>

<script lang="ts">
import Instafeed from 'instafeed.js'
import { Component, Vue } from 'nuxt-property-decorator'
import { Project } from '~/types/pages/gallery'
import ProjectComponent from '~/components/pages/gallery/project-component.vue'
import { ProjectWidths } from '~/constants/pages/gallery'
import projectsImages from '@/assets/pages/gallery/projects';

@Component({
  components: { ProjectComponent }
})
export default class GalleryPage extends Vue {
  mounted() {
    const feed = new Instafeed({
      accessToken: process.env.INSTAFEED_ACCESS_TOKEN,
      limit: 3,
      template: `
        <a href="{{link}}" class="instafeed-link">
          <img title="{{caption}}" src="{{image}}" alt="{{caption}}" />
        </a>
      `,
    });
    feed.run();
  }

  get paintATreeItems(): Project[] {
    return [
      {
        color: '#E2C44B',
        image: projectsImages.project1,
        title: this.$t('pages.gallery.paint-a-tree.projects.silver-birch-tree.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.silver-birch-tree.description') as string,
        width: ProjectWidths.Base
      },
      {
        color: '#70C8E5',
        image: projectsImages.project2,
        title: this.$t('pages.gallery.paint-a-tree.projects.red-maple-tree.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.red-maple-tree.description') as string,
        width: ProjectWidths.Base
      },
      {
        color: '#D66761',
        image: projectsImages.project3,
        title: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree.description') as string,
        width: ProjectWidths.Base
      },
      {
        color: '#BAB6D3',
        image: projectsImages.project4,
        title: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree-2.title') as string,
        description: this.$t('pages.gallery.paint-a-tree.projects.japanese-cherry-tree-2.description') as string,
        width: ProjectWidths.Large
      },
    ];
  }

  get plantATreeItems(): Project[] {
    return [
      {
        color: '#7CC197',
        image: projectsImages.project5,
        title: this.$t('pages.gallery.plant-a-tree.projects.lilac-tree.title') as string,
        description: this.$t('pages.gallery.plant-a-tree.projects.lilac-tree.description') as string,
        width: ProjectWidths.Base
      },
      {
        color: '#BAB6D3',
        image: projectsImages.project6,
        title: this.$t('pages.gallery.plant-a-tree.projects.earthworms.title') as string,
        description: this.$t('pages.gallery.plant-a-tree.projects.earthworms.description') as string,
        width: ProjectWidths.Base
      },
      {
        color: '#F96464',
        image: projectsImages.project7,
        title: this.$t('pages.gallery.plant-a-tree.projects.japanese-cherry-tree.title') as string,
        description: this.$t('pages.gallery.plant-a-tree.projects.japanese-cherry-tree.description') as string,
        width: ProjectWidths.Base
      },
    ];
  }
}
</script>

<style lang="scss">
.gallery-page {
  .paint-a-tree,
  .plant-a-tree {
    h1 {
      @include media-max('sm') {
        position: relative;
      }

      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 16rem;
        height: 6rem;
        margin-right: 2rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transform: translateY(-0.7rem);

        @include media-max('sm') {
          position: absolute;
          top: 0;
          left: 50%;
          width: 6rem;
          height: 3.8rem;
          transform: translate(-50%, -100%);
        }
      }
    }
  }

  .paint-a-tree {
    h1,
    h2 {
      color: #D66761;
    }

    h1 {
      &::before {
        background-image: url("~assets/pages/gallery/title-1.png");
      }
    }
  }

  .plant-a-tree {
    h1,
    h2 {
      color: #7CC197;
    }

    h1 {
      &::before {
        background-image: url("~assets/pages/gallery/title-2.png");
      }
    }
  }

  .hands-image {
    width: 100%;
    margin-bottom: 4.8rem;

    @include media-max('sm') {
      margin-bottom: 6.8rem;
    }
  }

  .instafeed-container {
    .instafeed-link {
      overflow: hidden;
      margin: 0 auto 4.8rem;
      width: 30%;
      height: 31rem;

      @include media-max('lg') {
        width: 45%;
      }

      @include media-max('md') {
        width: 100%;
        height: 35rem;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
