import { BsBoxFill } from 'react-icons/bs';
import BusinessModelButton from './BusinessModelButton/BusinessModelButton';
import { useAppDispatch, useAppSelector } from 'store';
import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel, setSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { RiRefreshFill } from 'react-icons/ri';
import { withTranslation } from 'react-i18next';
import { WithTranslation } from 'next-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from 'shared/i18n/i18n.config';
loadTranslations(i18n);

function Step1({ t }: WithTranslation) {
  const dispatch = useAppDispatch();
  const businessModelSelected = useAppSelector(selectSelectedBusinessModel);
  const oneTimePaymentIcon = <BsBoxFill className="mt-1 w-[12px] h-[17px]" />;
  const recurringPaymentIcon = <RiRefreshFill className="mt-1 w-[12px] h-[17px]" />;
  return (
    <div className="flex gap-3 min-w-[630px] tablet-l:min-w-[150px] mobile-l:flex-col tablet-m:mt-4">
      <BusinessModelButton
        onClick={() => dispatch(setSelectedBusinessModel(BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT))}
        isSelected={businessModelSelected === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT}
        title={t('STEP_ONE.ONE_TIME_PAYMENT.TITLE')}
        subtitle={t('STEP_ONE.ONE_TIME_PAYMENT.SUBTITLE')}
        icon={oneTimePaymentIcon}
      />
      <BusinessModelButton
        onClick={() => dispatch(setSelectedBusinessModel(BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT))}
        isSelected={businessModelSelected === BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT}
        title={t('STEP_ONE.RECURRING_PAYMENT.TITLE')}
        subtitle={t('STEP_ONE.RECURRING_PAYMENT.SUBTITLE')}
        icon={recurringPaymentIcon}
      />
    </div>
  );
}

export default withTranslation()(Step1);
