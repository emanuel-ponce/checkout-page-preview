import { beforeStep, selectCurrentStep, selectTotalSteps } from '@slices/local/stepper.slice';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { FiArrowLeft } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from 'store';
import { loadTranslations } from './i18n/translations';
import i18n from 'shared/i18n/i18n.config';
import { WithTranslation } from 'next-i18next';
loadTranslations(i18n);

function StepDetail({ t }: WithTranslation) {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);
  const totalSteps = useAppSelector(selectTotalSteps);
  const texts = [t('STEP_DETAIL.STEPS.ONE'), t('STEP_DETAIL.STEPS.TWO'), t('STEP_DETAIL.STEPS.THREE')];
  const [isOnHover, setIsOnHover] = useState(false);
  return (
    <div className={`min-w-[140px] ${currentStep > 1 ? 'cursor-pointer' : ''}`} onClick={() => currentStep > 1 && dispatch(beforeStep())} onMouseEnter={() => setIsOnHover(true)} onMouseLeave={() => setIsOnHover(false)}>
      <div className="flex items-center h-[21px]">
        {currentStep > 1 && <FiArrowLeft className="text-theme-iconGray mr-2" />}
        <span className="font-medium">{currentStep === 1 || !isOnHover ? texts[currentStep - 1] : t('STEP_DETAIL.BACK_BUTTON')}</span>
        {(currentStep === 1 || !isOnHover) && <span className="text-xs ml-2">{t('STEP_DETAIL.STEPS_COUNTER', { currentStep, totalSteps })}</span>}
      </div>
    </div>
  );
}

export default withTranslation()(StepDetail);
