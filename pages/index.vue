<template>
  <div>
    <div class="card mb-8">
      <h1 class="text--primary">{{ $t('pages.home.welcome.title') }}</h1>
      <p class="mb-8">{{ $t('pages.home.welcome.subtitle') }}</p>

      <div v-for="list in $t('pages.home.welcome.lists')" :key="list.label">
        <p class="bold">{{ list.label }}</p>
        <ul>
          <li v-for="item in list.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <h1 class="text--primary">{{ $t('pages.home.program.title') }}</h1>
      <p v-for="text in $t('pages.home.program.texts')" :key="text" v-html="text" class="mb-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HomePage extends Vue {}
</script>
