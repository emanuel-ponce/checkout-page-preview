import { createSlice } from '@reduxjs/toolkit';
import { DEVICES_OPTIONS_ENUM } from 'shared/enums/devicesOptions.enum';
import { LOCATIONS_ENUM } from 'shared/enums/locations.enum';
import { RootState } from 'store';
import { stepperSlice } from './stepper.slice';

interface IState {
  values: {
    device: DEVICES_OPTIONS_ENUM;
    location: LOCATIONS_ENUM;
  };
}

const initialState: IState = {
  values: {
    device: DEVICES_OPTIONS_ENUM.DESKTOP,
    location: LOCATIONS_ENUM.ESPAÑA
  }
};

const isBeforeStepAction = (action: any) => stepperSlice.actions.beforeStep.match(action);

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setDevice: (state, { payload }: { payload: IState['values']['device'] }) => {
      state.values.device = payload;
    },
    setLocation: (state, { payload }: { payload: IState['values']['location'] }) => {
      state.values.location = payload;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(isBeforeStepAction, state => {
      state.values.device = DEVICES_OPTIONS_ENUM.DESKTOP;
    });
  }
});

/** Actions */
export const { setDevice } = previewSlice.actions;
export const { setLocation } = previewSlice.actions;

/** Selectors */
export const selectDeviceSelected = (state: RootState): IState['values']['device'] => state.preview.values.device;
export const selectLocationSelected = (state: RootState): IState['values']['location'] => state.preview.values.location;

export const previewSliceReducer = previewSlice.reducer;
