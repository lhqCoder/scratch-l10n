/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

const locales = {
    'en': {name: 'English'},
    'zh-cn': {name: '简体中文'},
};

const customLocales = {
    'ab': {
        locale: 'ab',
        parentLocale: 'ru'
    },
    // Aragonese is not in the locale data, using es for Spain
    'an': {
        locale: 'an',
        parentLocale: 'es'
    },
    // haitian creole is not in locale-langData
    'ht': {
        locale: 'ht',
        parentLocale: 'fr'
    },
    'oc': {
        locale: 'oc',
        parentLocale: 'fr'
    },
    'rap': {
        locale: 'rap',
        parentLocale: 'es'
    },
    // TODO: replace zh-cn, zh-tw with zh-Hans and zh-Hant then customLocales is unnecessary
    'zh-cn': {
        locale: 'zh-cn',
        parentLocale: 'zh'
    },
    'zh-tw': {
        locale: 'zh-tw',
        parentLocale: 'zh'
    }
};

const localeMap = {
    'aa-dj': 'aa_DJ',
    'es-419': 'es_419',
    // ja-Hira: no map - it's 'ja-Hira' on transifex
    'pt-br': 'pt_BR',
    'zh-cn': 'zh_CN',
    'zh-tw': 'zh_TW'
};

// list of RTL locales supported, and a function to check whether a locale is RTL
const rtlLocales = [
    'ar',
    'ckb',
    'fa',
    'he'
];

const isRtl = locale => {
    return rtlLocales.indexOf(locale) !== -1;
};

export {locales as default, customLocales, localeMap, isRtl};
