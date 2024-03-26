import { BUSINESS_MODEL_TYPES_ENUM, selectSelectedBusinessModel } from '@slices/local/businessModel.slice';
import { nextStep, selectCurrentStep } from '@slices/local/stepper.slice';
import { withTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from 'store';
import { WithTranslation } from 'next-i18next';
import i18n from 'shared/i18n/i18n.config';
import { loadTranslations } from './i18n/translations';
import { useUpdateCustomizationMutation } from '@slices/api/customization/customization.api.slice';
import { PutCustomizationBody } from '@slices/api/customization/customization.api.model';
import { selectBrandColor, selectCoupons, selectPhoneNumber, selectShipping, selectStorePolicies, selectTaxSupport } from '@slices/local/customization.slice';
loadTranslations(i18n);

function NextButton({ t }: WithTranslation) {
  const dispatch = useAppDispatch();
  const selectedBusinessModel = useAppSelector(selectSelectedBusinessModel);
  const currentStep = useAppSelector(selectCurrentStep);
  const brandColor = useAppSelector(selectBrandColor);
  const enabledCoupons = useAppSelector(selectCoupons);
  const enabledPhoneNumber = useAppSelector(selectPhoneNumber);
  const enabledShipping = useAppSelector(selectShipping);
  const enabledStorePolicies = useAppSelector(selectStorePolicies);
  const enabledTaxSupport = useAppSelector(selectTaxSupport);
  const [updateCustomizationSettings, { isLoading: isLoadingCoupon, isError: isBenefitError, data, isSuccess }] = useUpdateCustomizationMutation();

  const putCustomization = async () => {
    const body: PutCustomizationBody = {
      customization: {
        brandColor,
        enabledCoupons,
        enabledPhoneNumber,
        enabledShipping,
        enabledStorePolicies,
        enabledTaxSupport
      }
    };
    return updateCustomizationSettings(body);
  };

  const onClick = () => {
    if (currentStep === 2) {
      putCustomization();
    }
    dispatch(nextStep());
  };
  return (
    <div className="self-end">
      <button
        className="bg-blue-400 text-white px-3 py-2 rounded-[4px] flex items-center gap-3 disabled:bg-gray-500 disabled:cursor-no-drop focus:shadow-md-blue"
        onClick={onClick}
        disabled={selectedBusinessModel === BUSINESS_MODEL_TYPES_ENUM.RECURRING_PAYMENT}
      >
        <span className="text-sm font-medium">{t('NEXT_BUTTON.LABEL')}</span>
        <FaChevronRight className="h-[12px] w-[7px] text-sm" />
      </button>
    </div>
  );
}

export default withTranslation()(NextButton);
