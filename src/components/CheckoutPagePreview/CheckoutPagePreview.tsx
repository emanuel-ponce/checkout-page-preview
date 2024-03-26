import FakeBrowserBar from '@components/Shared/FakeBrowserBar/FakeBrowserBar';
import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { selectDeviceSelected } from '@slices/local/preview.slice';
import { selectCurrentStep } from '@slices/local/stepper.slice';
import { WithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { withTranslation } from 'react-i18next';
import { DEVICES_OPTIONS_ENUM } from 'shared/enums/devicesOptions.enum';
import useHandheldDetector from 'shared/hooks/useHandheldDetector/useHandheldDetector';
import { useAppSelector } from 'store';
import { loadTranslations } from './i18n/translations';
import i18n from 'shared/i18n/i18n.config';
loadTranslations(i18n);
const CheckoutPage = dynamic(() => import('checkoutPage/pages/index'), {
  ssr: false,
  suspense: true
});

function CheckoutPagePreview({ t }: WithTranslation) {
  const businessModel = useAppSelector(selectSelectedBusinessModel);
  const currentStep = useAppSelector(selectCurrentStep);
  const deviceSelected = useAppSelector(selectDeviceSelected);
  const isHandheld = useHandheldDetector();
  const mobileWrapperClasses = 'w-[350px] rounded-[34px] max-h-[700px]';
  const desktopWrapperClasses = 'rounded-md w-[1280px]';
  const step1ClassesWrapper = `rounded-md`;
  const step2ClassesWrapper = `rounded-md w-[720px] overflow-y-auto`;
  const step3ClassesWrapper = `${deviceSelected === DEVICES_OPTIONS_ENUM.DESKTOP ? desktopWrapperClasses : mobileWrapperClasses} overflow-y-auto`;
  const imageProp = {
    src: businessModel === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT ? '/one-time-payment-mock.png' : '/recurring-payment-mock.png',
    alt: businessModel === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT ? t('CHECKOUT_PAGE_PREVIEW.IMAGES.ONE_TIME_PAYMENT_ALT') : t('CHECKOUT_PAGE_PREVIEW.IMAGES.RECURRING_PAYMENT_ALT')
  };
  return (
    <div className="flex justify-center flex-col items-center ">
      <div
        className={`max-h-[1200px] mb-10 shadow-2xl transition-width duration-500 ease-in-out ${currentStep === 2 && step1ClassesWrapper} ${currentStep === 2 && step2ClassesWrapper} ${currentStep === 3 && step3ClassesWrapper}`}
      >
        {(!isHandheld || currentStep === 3) && <FakeBrowserBar device={deviceSelected} url="mydomain.me" />}
        <div className={`transition-opacity duration-500 ease-in-out ${currentStep > 1 ? 'opacity-0' : 'opacity-100'}`}>
          {currentStep === 1 && !isHandheld && <Image className="rounded-b-[8px]" src={imageProp.src} width={720} height={496} alt={imageProp.alt} />}
        </div>
        <div className={`transition-opacity duration-500 ease-in-out ${currentStep === 1 ? 'opacity-0' : 'opacity-100'}`}>
          {((!isHandheld && currentStep > 1) || currentStep === 3) && <CheckoutPage />}
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(CheckoutPagePreview);
