import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export enum BUSINESS_MODEL_TYPES_ENUM {
  ONE_TIME_PAYMENT,
  RECURRING_PAYMENT
}

interface IState {
  selectedBusinessModel: BUSINESS_MODEL_TYPES_ENUM;
}

const initialState: IState = {
  selectedBusinessModel: BUSINESS_MODEL_TYPES_ENUM.ONE_TIME_PAYMENT
};

export const businessModelSlice = createSlice({
  name: 'businessModel',
  initialState,
  reducers: {
    setSelectedBusinessModel: (state, { payload }: { payload: IState['selectedBusinessModel'] }) => {
      state.selectedBusinessModel = payload;
    }
  }
});

/** Actions */
export const { setSelectedBusinessModel } = businessModelSlice.actions;

/** Selectors */
export const selectSelectedBusinessModel = (state: RootState): IState['selectedBusinessModel'] => state.businessModel.selectedBusinessModel;

export const businessModelSliceReducer = businessModelSlice.reducer;
