import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
  },
});
