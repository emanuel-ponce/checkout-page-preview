import { configureStore } from '@reduxjs/toolkit';
import { businessModelSliceReducer } from '@slices/local/businessModel.slice';
import { stepperSliceReducer } from '@slices/local/stepper.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    businessModel: businessModelSliceReducer,
    stepper: stepperSliceReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
