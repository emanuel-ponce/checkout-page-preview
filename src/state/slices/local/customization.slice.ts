import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export enum BRAND_COLOR_OPTIONS {
  LIGHT = 'rgb(255, 255, 255);',
  DARK = 'rgb(25, 37, 82)'
}

interface IState {
  values: {
    brandColor: BRAND_COLOR_OPTIONS;
    coupons: boolean;
    shipping: boolean;
    storePolicies: boolean;
    taxSupport: boolean;
    phoneNumber: boolean;
  };
}

const initialState: IState = {
  values: {
    brandColor: BRAND_COLOR_OPTIONS.LIGHT,
    coupons: false,
    phoneNumber: false,
    shipping: false,
    storePolicies: false,
    taxSupport: false
  }
};

export const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    setBrandColor: (state, { payload }: { payload: IState['values']['brandColor'] }) => {
      state.values.brandColor = payload;
    },
    setCoupons: (state, { payload }: { payload: IState['values']['coupons'] }) => {
      state.values.coupons = payload;
    },
    setPhoneNumber: (state, { payload }: { payload: IState['values']['phoneNumber'] }) => {
      state.values.phoneNumber = payload;
    },
    setShipping: (state, { payload }: { payload: IState['values']['shipping'] }) => {
      state.values.shipping = payload;
    },
    setStorePolicies: (state, { payload }: { payload: IState['values']['storePolicies'] }) => {
      state.values.storePolicies = payload;
    },
    setTaxSupport: (state, { payload }: { payload: IState['values']['taxSupport'] }) => {
      state.values.taxSupport = payload;
    }
  }
});

/** Actions */
export const { setBrandColor, setCoupons, setPhoneNumber, setShipping, setStorePolicies, setTaxSupport } = customizationSlice.actions;

/** Selectors */
export const selectBrandColor = (state: RootState): IState['values']['brandColor'] => state.customization.values.brandColor;
export const selectCoupons = (state: RootState): IState['values']['coupons'] => state.customization.values.coupons;
export const selectPhoneNumber = (state: RootState): IState['values']['phoneNumber'] => state.customization.values.phoneNumber;
export const selectShipping = (state: RootState): IState['values']['shipping'] => state.customization.values.shipping;
export const selectStorePolicies = (state: RootState): IState['values']['storePolicies'] => state.customization.values.storePolicies;
export const selectTaxSupport = (state: RootState): IState['values']['taxSupport'] => state.customization.values.taxSupport;

export const customizationSliceReducer = customizationSlice.reducer;
