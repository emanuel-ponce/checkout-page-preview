import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface IState {
  currentStep: number;
  totalSteps: number;
}

const initialState: IState = {
  currentStep: 1,
  totalSteps: 3
};

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    nextStep: state => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep++;
      }
    },
    beforeStep: state => {
      if (state.currentStep > 1) {
        state.currentStep--;
      }
    }
  }
});

/** Actions */
export const { beforeStep, nextStep } = stepperSlice.actions;

/** Selectors */
export const selectCurrentStep = (state: RootState): IState['currentStep'] => state.stepper.currentStep;
export const selectTotalSteps = (state: RootState): IState['totalSteps'] => state.stepper.totalSteps;

export const stepperSliceReducer = stepperSlice.reducer;
