import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import { loadTranslations } from './i18n/translations';
import i18n from 'shared/i18n/i18n.config';

loadTranslations(i18n);

function HeaderLinks({ t }: WithTranslation) {
  return (
    <div className="flex items-center">
      <a href="https://dashboard.stripe.com/register" target="_blank" className="mr-3 text-blue-400 font-semibold">
        {t('HEADER_LINKS.CREATE_ACCOUNT')}
      </a>
      <div className="ml-[2px] mr-3 border-r-[1px] h-[20px] border-r-gray-400"></div>
      <a href="https://docs.stripe.com/checkout/quickstart" target="_blank" className="flex items-center gap-3">
        <span className="text-blue-400 font-semibold">{t('HEADER_LINKS.DOCS')}</span>
        <FiArrowRight className="mt-[2px] text-blue-400" />
      </a>
    </div>
  );
}

export default withTranslation()(HeaderLinks);
