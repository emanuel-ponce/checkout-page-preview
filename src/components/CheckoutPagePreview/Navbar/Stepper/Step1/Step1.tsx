import { BsBoxFill } from 'react-icons/bs';
import BusinessModelButton from './BusinessModelButton/BusinessModelButton';
import { useAppDispatch, useAppSelector } from 'store';
import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel, setSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { RiRefreshFill } from 'react-icons/ri';

interface Step1Props {}

function Step1({}: Step1Props) {
  const dispatch = useAppDispatch();
  const businessModelSelected = useAppSelector(selectSelectedBusinessModel);
  const oneTimePaymentIcon = <BsBoxFill className="mt-1 w-[12px] h-[17px] text-theme-iconBlue" />;
  const recurringPaymentIcon = <RiRefreshFill className="mt-1 w-[12px] h-[17px] text-theme-iconBlue" />;
  return (
    <div className="flex gap-3">
      <BusinessModelButton
        onClick={() => dispatch(setSelectedBusinessModel(BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT))}
        isSelected={businessModelSelected === BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT}
        title="One-time payments"
        subtitle="Digital or physical goods and services"
        icon={oneTimePaymentIcon}
      />
      <BusinessModelButton
        onClick={() => dispatch(setSelectedBusinessModel(BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT))}
        isSelected={businessModelSelected === BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT}
        title="Recurring payments"
        subtitle="Subscription or SaaS businesses"
        icon={recurringPaymentIcon}
      />
    </div>
  );
}

export default Step1;
