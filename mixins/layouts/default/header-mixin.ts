import { Component, Vue } from 'nuxt-property-decorator'
import { Routes } from '~/constants/routes'

@Component
export default class HeaderMixin extends Vue {
  get menuLinks() {
    return [
      {
        label: this.$t('layouts.default.header.menu-links.home'),
        path: this.localePath(Routes.Home.name),
      },
      {
        label: this.$t('layouts.default.header.menu-links.gallery'),
        path: this.localePath(Routes.Gallery.name),
      },
      {
        label: this.$t('layouts.default.header.menu-links.people'),
        path: this.localePath(Routes.People.name),
      },
      {
        label: this.$t('layouts.default.header.menu-links.contact'),
        path: this.localePath(Routes.Contact.name),
      },
    ];
  }

  get availableLocales() {
    return (this.$i18n.locales as string[]).filter(i => i !== this.$i18n.locale);
  }
}
