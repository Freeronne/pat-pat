<template>
  <div>
    <h1 class="title">{{ $t('pages.people.title') }}</h1>

    <div class="mb-16">
      <h2>{{ $t('pages.people.bureau.title') }}</h2>

      <div class="people-container d-flex flex-wrap justify--space-between align--center">
        <bureau-member-card v-for="bureauMember in bureauMembers" :key="bureauMember.name" :member="bureauMember" />

        <img src="@/assets/pages/people/hands.png" alt=''>
      </div>
    </div>

    <div>
      <h2 class="partners-title text--center">{{ $t('pages.people.partners.title') }}</h2>

      <div class="people-container d-flex flex-wrap justify--space-between align--center">
        <img v-for="partnersImage in partnersImages" :key="partnersImage" :src="partnersImage" alt="">
      </div>
      <p class="mt-10 text--center">{{ $t('pages.people.partners.text') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Member } from '~/types/pages/people'
import BureauMemberCard from '~/components/pages/people/bureau-member-card.vue'
import BureauMembersImages from '~/assets/pages/people/bureau-members';
import PartnersImages from '~/assets/pages/people/partners';

@Component({
  components: { BureauMemberCard }
})
export default class PeoplePage extends Vue {
  get bureauMembers(): Member[] {
    return [
      {
        color: '#70C8E5',
        image: BureauMembersImages.Pascale,
        name: this.$t('pages.people.bureau.members.pascale.name') as string,
        jobDescription: this.$t('pages.people.bureau.members.pascale.job-description') as string,
      },
      {
        color: '#E2C44B',
        image: BureauMembersImages.Arnaud,
        name: this.$t('pages.people.bureau.members.arnaud.name') as string,
        jobDescription: this.$t('pages.people.bureau.members.arnaud.job-description') as string,
      },
    ]
  }

  get partnersImages() {
    return [PartnersImages.partner1, PartnersImages.partner2, PartnersImages.partner3];
  }
}
</script>

<style scoped lang="scss">
.title {
  color: #80BA42;
}

.people-container {
  & > * {
    width: 30%;

    @include media-max('md') {
      margin: 32px auto 32px; // TODO: Use extends
      width: 75%;
    }
  }
}

.partners-title {
  color: #70C8E5;
}
</style>
