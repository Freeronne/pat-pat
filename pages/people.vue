<template>
  <div>
    <div class="mb-16">
      <h1>{{ $t('pages.people.association.title') }}</h1>

      <div class="people-container d-flex flex-wrap justify--space-between align--center">
        <bureau-member-card v-for="bureauMember in bureauMembers" :key="bureauMember.name" :member="bureauMember" />

        <img src="@/assets/pages/people/hands.png" alt=''>
      </div>
    </div>

    <div class="mb-16">
      <h1>{{ $t('pages.people.partners.title') }}</h1>

      <div class="people-container d-flex flex-wrap justify--space-between align--center">
        <img v-for="partnersImage in partnersImages" :key="partnersImage" :src="partnersImage" alt="">
      </div>
    </div>

    <div>
      <h1>{{ $t('pages.people.ambassadors.title') }}</h1>
      <p class="text--center fs--medium">{{ $t('pages.people.ambassadors.text') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Member } from '~/types/pages/people'
import { HeadValues } from '~/types/seo'
import BureauMemberCard from '~/components/pages/people/bureau-member-card.vue'
import BureauMembersImages from '~/assets/pages/people/bureau-members';
import PartnersImages from '~/assets/pages/people/partners';

@Component({
  components: { BureauMemberCard }
})
export default class PeoplePage extends Vue {
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
      title: this.$t('pages.people.head.title') as string,
      description: this.$t('pages.people.head.description') as string,
    }
  }

  get bureauMembers(): Member[] {
    return [
      {
        color: '#70C8E5',
        image: BureauMembersImages.Pascale,
        name: this.$t('pages.people.association.members.pascale.name') as string,
        jobDescription: this.$t('pages.people.association.members.pascale.job-description') as string,
      },
      {
        color: '#E2C44B',
        image: BureauMembersImages.Arnaud,
        name: this.$t('pages.people.association.members.arnaud.name') as string,
        jobDescription: this.$t('pages.people.association.members.arnaud.job-description') as string,
      },
    ]
  }

  get partnersImages() {
    return [PartnersImages.partner1, PartnersImages.partner2, PartnersImages.partner3];
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #70C8E5;
}

.people-container {
  & > * {
    width: 27%;

    @include media-max('md') {
      margin: 32px auto 32px; // TODO: Use extends
      width: 75%;
    }
  }
}
</style>
