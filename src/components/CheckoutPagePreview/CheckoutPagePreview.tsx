import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import Image from 'next/image';
import { useAppSelector } from 'store';

function CheckoutPagePreview() {
  const businessModel = useAppSelector(selectSelectedBusinessModel);

  return (
    <div className="flex justify-center">
      {businessModel === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT ? (
        <Image src={'/one-time-payment-mock.png'} width={720} height={496} alt="One time payment mock image" />
      ) : (
        <Image src={'/recurring-payment-mock.png'} width={720} height={496} alt="Recurring payment mock image" />
      )}
    </div>
  );
}

export default CheckoutPagePreview;
