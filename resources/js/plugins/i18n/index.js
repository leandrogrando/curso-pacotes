import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '../../../../static/translation/index'

Vue.use(VueI18n)

const locale = document.querySelector('meta[name="locale"]').content

export const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en_US',
  messages
})
