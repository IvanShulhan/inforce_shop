/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './slices/modal.slice';
import productsReducer from './slices/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
