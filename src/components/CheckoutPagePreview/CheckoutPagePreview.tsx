import FakeBrowserBar from '@components/Shared/FakeBrowserBar/FakeBrowserBar';
import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { selectCurrentStep } from '@slices/local/stepper.slice';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useAppSelector } from 'store';
const CheckoutPage = dynamic(() => import('checkoutPage/pages/index'), {
  ssr: false,
  suspense: true
});

function CheckoutPagePreview() {
  const businessModel = useAppSelector(selectSelectedBusinessModel);
  const currentStep = useAppSelector(selectCurrentStep);
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className={`transition-width duration-500 ease-in-out max-h-[1200px] mb-10 ${currentStep > 1 && 'overflow-y-auto'} ${currentStep === 3 ? 'w-[1280px]' : 'w-[720px]'} shadow-2xl`}>
        <FakeBrowserBar url="mydomain.me" />
        <div className={`transition-opacity duration-500 ease-in-out ${currentStep > 1 ? 'opacity-0' : 'opacity-100'}`}>
          {currentStep === 1 &&
            (businessModel === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT ? (
              <Image className="rounded-b-[8px]" src={'/one-time-payment-mock.png'} width={720} height={496} alt="One time payment mock image" />
            ) : (
              <Image className="rounded-b-[8px]" src={'/recurring-payment-mock.png'} width={720} height={496} alt="Recurring payment mock image" />
            ))}
        </div>
        <div className={`transition-opacity duration-500 ease-in-out ${currentStep === 1 ? 'opacity-0' : 'opacity-100'}`}>
          {currentStep > 1 && (
            <div>
              <CheckoutPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPagePreview;
