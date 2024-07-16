import {createI18n} from "vue-i18n";

import zhHans from './zh_hans.json'
import zhHant from './zh_hant.json'
import en from './en.json'
import ko from './ko.json'

const i18n = createI18n<typeof zhHans, 'zh-cn' | 'zh-tw' | 'en' | 'ko'>({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages: {
    'zh-cn': zhHans,
    'zh-tw': zhHant,
    'en': en,
    'ko': ko
  }
})

export {i18n}
