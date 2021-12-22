<template>
  <div>
    <img :src="member.image" :alt="member.image" class="mb-7">

    <div class="text--center">
      <p class="mb-5 extra-bold text--uppercase" :style="{ color: member.color }">{{ member.name }}</p>
      <p>{{ member.jobDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Member } from '~/types/pages/people'

@Component
export default class BureauMemberCard extends Vue {
  @Prop({ type: Object, required: true }) member!: Member;
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
