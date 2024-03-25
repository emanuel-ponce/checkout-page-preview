import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Translate } from '../models/translate.model';
import { TranslateEnum } from '../enums/translate.enum';

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: 'en',
  load: 'languageOnly',
  lng: 'en',
  resources: {
    en: {
      translation: {}
    },
    es: {
      translation: {}
    }
  }
});

export default i18n;

export function useUtilsTranslate() {
  const { i18n } = useTranslation();
  const translate = (object: Translate) => object?.[i18n.languages[0] as keyof Translate];
  const currentTranslation = (): TranslateEnum => i18n.languages[0] as TranslateEnum;
  return { translate, currentTranslation };
}
