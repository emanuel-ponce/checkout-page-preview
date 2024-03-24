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

interface Step2Props {}

function Step2({}: Step2Props) {
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
    { label: 'Coupons', selector: selectCoupons, setter: setCoupons },
    { label: 'Shipping', selector: selectShipping, setter: setShipping },
    { label: 'Store policies', selector: selectStorePolicies, setter: setStorePolicies },
    { label: 'Tax support', selector: selectTaxSupport, setter: setTaxSupport },
    { label: 'Phone number', selector: selectPhoneNumber, setter: setPhoneNumber }
  ];
  return (
    <div className="max-w-[700px] w-full">
      <div className="w-full grid grid-cols-1 gap-y-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-2">
          <ColorSwitcher label="Brand colors" colors={colors} onChange={color => dispatch(setBrandColor(color))} />
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

export default Step2;
