import { Component, Vue } from 'nuxt-property-decorator'
import { LocaleObject } from '@nuxtjs/i18n'
import { Routes } from '~/constants/routes'

@Component
export default class HeaderMixin extends Vue {
  get menuLinks() {
    return [
      {
        label: this.$t('layouts.default.header.menu-links.home'),
        path: this.localePath(Routes.Home.name, this.$i18n.locale),
      },
      {
        label: this.$t('layouts.default.header.menu-links.program'),
        path: this.localePath(Routes.Program.name, this.$i18n.locale),
      },
      {
        label: this.$t('layouts.default.header.menu-links.gallery'),
        path: this.localePath(Routes.Gallery.name, this.$i18n.locale),
      },
      {
        label: this.$t('layouts.default.header.menu-links.people'),
        path: this.localePath(Routes.People.name, this.$i18n.locale),
      },
      {
        label: this.$t('layouts.default.header.menu-links.contact'),
        path: this.localePath(Routes.Contact.name, this.$i18n.locale),
      },
    ];
  }

  get availableLocales() {
    const formattedLocales: { [key: string]: string } = {
      fr: 'Français',
      en: 'Anglais',
    }

    return (this.$i18n.locales as LocaleObject[])
      .filter(locale => locale.code !== this.$i18n.locale)
      .map(locale => ({ label: formattedLocales[locale.code], value: locale.code }));
  }
}
