import { i18n } from 'i18next';
import es from './es';
import en from './en';

export const loadTranslations = (i18n: i18n) => {
  i18n.addResourceBundle('en', 'translation', en);
  i18n.addResourceBundle('es', 'translation', es);
};
