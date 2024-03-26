import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { stripeApi } from '@slices/api';
import { businessModelSliceReducer } from '@slices/local/businessModel.slice';
import { customizationSliceReducer } from '@slices/local/customization.slice';
import { previewSliceReducer } from '@slices/local/preview.slice';
import { stepperSliceReducer } from '@slices/local/stepper.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const combinedReducer = combineReducers({
  businessModel: businessModelSliceReducer,
  stepper: stepperSliceReducer,
  customization: customizationSliceReducer,
  preview: previewSliceReducer,
  [stripeApi.reducerPath]: stripeApi.reducer
});

const reducer = (state: any, action: AnyAction) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stripeApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
