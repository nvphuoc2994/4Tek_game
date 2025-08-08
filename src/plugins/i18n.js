import { ref } from "vue";
import en from "../locales/en.json";
import vi from "../locales/vi.json";

export default {
    install:  (app, options) => {
        let currentLocale = ref(localStorage.getItem('selectedLanguage') || 'en');

        const locales = {
            en,
            vi,
        };

        app.config.globalProperties.$translate = (key) => {
            const localeData = locales[currentLocale.value] || locales.en;
            return key.split('.').reduce((o, i) => {
                if (o) return o[i];
            }, localeData);
        };

        app.provide('i18n', {
            data: locales,
            setLocale: (locale) => {
                currentLocale.value = locale;
                localStorage.setItem('selectedLanguage', locale);
            },
            getLocale: () => currentLocale.value,
        });
    }
}