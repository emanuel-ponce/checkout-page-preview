import Switch from './Switch/Switch';
import { useAppDispatch, useAppSelector } from 'store';
import {
  BRAND_COLOR_OPTIONS,
  selectBrandColor,
  selectCoupons,
  selectPhoneNumber,
  selectShipping,
  selectStorePolicies,
  selectTaxSupport,
  setBrandColor,
  setCoupons,
  setPhoneNumber,
  setShipping,
  setStorePolicies,
  setTaxSupport
} from '@slices/local/customization.slice';
import ColorSwitcher from './ColorSwitcher/ColorSwitcher';
import { withTranslation } from 'react-i18next';
import { WithTranslation } from 'next-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from 'shared/i18n/i18n.config';
loadTranslations(i18n);

function Step2({ t }: WithTranslation) {
  const dispatch = useAppDispatch();
  const brandColor = useAppSelector(selectBrandColor);
  const colors = [
    {
      color: BRAND_COLOR_OPTIONS.LIGHT,
      selected: brandColor === BRAND_COLOR_OPTIONS.LIGHT
    },
    {
      color: BRAND_COLOR_OPTIONS.DARK,
      selected: brandColor === BRAND_COLOR_OPTIONS.DARK
    }
  ];
  const switches = [
    { label: t('STEP_TWO.OPTIONS.COUPONS'), selector: selectCoupons, setter: setCoupons },
    { label: t('STEP_TWO.OPTIONS.SHIPPING'), selector: selectShipping, setter: setShipping },
    { label: t('STEP_TWO.OPTIONS.STORE_POLICIES'), selector: selectStorePolicies, setter: setStorePolicies },
    { label: t('STEP_TWO.OPTIONS.TAX_SUPPORT'), selector: selectTaxSupport, setter: setTaxSupport },
    { label: t('STEP_TWO.OPTIONS.PHONE_NUMBER'), selector: selectPhoneNumber, setter: setPhoneNumber }
  ];
  return (
    <div className="max-w-[700px] w-full">
      <div className="w-full grid grid-cols-1 gap-y-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-2">
          <ColorSwitcher label={t('STEP_TWO.OPTIONS.BRAND_COLOR')} colors={colors} onChange={color => dispatch(setBrandColor(color))} />
        </div>
        {switches.map(({ label, selector, setter }) => (
          <div className="p-2" key={label}>
            <Switch checked={useAppSelector(selector)} onChange={e => dispatch(setter(e.target.checked))} label={label} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withTranslation()(Step2);
