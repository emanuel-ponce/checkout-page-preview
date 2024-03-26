import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export enum CHECKOUT_MODE_ENUM {
  NONE,
  ON_CUSTOMIZATION,
  ON_PREVIEW
}
interface IState {
  currentStep: number;
  totalSteps: number;
  checkoutMode: CHECKOUT_MODE_ENUM; // Used to decouple the microfrontend checkout page logic
}

const initialState: IState = {
  currentStep: 1,
  totalSteps: 3,
  checkoutMode: CHECKOUT_MODE_ENUM.NONE
};

const updateCheckoutMode = (state: IState) => {
  switch (state.currentStep) {
    case 1:
      state.checkoutMode = CHECKOUT_MODE_ENUM.NONE;
      break;
    case 2:
      state.checkoutMode = CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION;
      break;
    case 3:
      state.checkoutMode = CHECKOUT_MODE_ENUM.ON_PREVIEW;
      break;
    default:
      break;
  }
};

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    nextStep: state => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep++;
      }
      updateCheckoutMode(state);
    },
    beforeStep: state => {
      if (state.currentStep > 1) {
        state.currentStep--;
      }
      updateCheckoutMode(state);
    }
  }
});

/** Actions */
export const { beforeStep, nextStep } = stepperSlice.actions;

/** Selectors */
export const selectCurrentStep = (state: RootState): IState['currentStep'] => state.stepper.currentStep;
export const selectTotalSteps = (state: RootState): IState['totalSteps'] => state.stepper.totalSteps;
export const selectCheckoutMode = (state: RootState): IState['checkoutMode'] => state.stepper.checkoutMode;

export const stepperSliceReducer = stepperSlice.reducer;
