import FakeBrowserBar from '@components/Shared/FakeBrowserBar/FakeBrowserBar';
import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import Image from 'next/image';
import { MdLock } from 'react-icons/md';
import { useAppSelector } from 'store';

function CheckoutPagePreview() {
  const businessModel = useAppSelector(selectSelectedBusinessModel);

  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="w-[720px] shadow-2xl">
        <FakeBrowserBar url="mydomain.me" />
        {businessModel === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT ? (
          <Image className="rounded-b-[8px]" src={'/one-time-payment-mock.png'} width={720} height={496} alt="One time payment mock image" />
        ) : (
          <Image className="rounded-b-[8px]" src={'/recurring-payment-mock.png'} width={720} height={496} alt="Recurring payment mock image" />
        )}
      </div>
    </div>
  );
}

export default CheckoutPagePreview;
