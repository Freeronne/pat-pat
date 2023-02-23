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

      <div class="partners-container d-flex flex-wrap justify--center align--center">
        <div v-for="partner in partners" :key="partner.image">
          <img :src="partner.image" :alt="partner.text" class="partner-img">
          <p v-if="partner.text" class="mt-3">{{ partner.text }}</p>
        </div>
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

  get partners() {
    return [
      { image: PartnersImages.partner1, text: '' },
      { image: PartnersImages.partner2, text: '' },
      { image: PartnersImages.partner3, text: '' },
      { image: PartnersImages.partner4, text: 'West Horndon Primary School' },
      { image: PartnersImages.partner5, text: 'La Retraite Roman Catholic Girls’ School' },
    ];
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #70C8E5;
}

.people-container,
.partners-container {
  & > * {
    width: 27%;

    @include media-max('md') {
      margin: 32px auto 32px; // TODO: Use extends
      width: 75%;
    }
  }
}

.partners-container {
  & > * {
    flex: 0 0 calc(33.33%);
    margin-bottom: 5rem;
    text-align: center;

    @include media-max('md') {
      flex: 0 0 calc(45%);
    }

    @include media-max('sm') {
      flex: 0 0 calc(100%);
    }

    .partner-img {
      height: 20rem;
      width: 100%;
      object-fit: contain;
    }

    // TODO: Update number depending items
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }
}
</style>
