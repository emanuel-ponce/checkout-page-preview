import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { nextStep, selectCurrentStep } from '@slices/local/stepper.slice';
import { withTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from 'store';
import { WithTranslation } from 'next-i18next';
import i18n from 'shared/i18n/i18n.config';
import { loadTranslations } from './i18n/translations';
loadTranslations(i18n);

function NextButton({ t }: WithTranslation) {
  const dispatch = useAppDispatch();
  const selectedBusinessModel = useAppSelector(selectSelectedBusinessModel);
  return (
    <div className="self-end tablet-m:mt-4">
      <button
        className="bg-blue-400 text-white px-3 py-2 rounded-[4px] flex items-center gap-3 disabled:bg-gray-500 disabled:cursor-no-drop focus:shadow-md-blue"
        onClick={() => dispatch(nextStep())}
        disabled={selectedBusinessModel === BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT}
      >
        <span className="text-sm font-medium">{t('NEXT_BUTTON.LABEL')}</span>
        <FaChevronRight className="h-[12px] w-[7px] text-sm" />
      </button>
    </div>
  );
}

export default withTranslation()(NextButton);
