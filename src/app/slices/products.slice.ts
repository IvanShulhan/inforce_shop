/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../../api/axios';
import { IProduct } from '../../models/product.model';
import { RootState } from '../store';

export interface IProductsState {
  products: IProduct[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: IProductsState = {
  products: [],
  status: 'idle',
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const { data } = await axios.get<IProduct[]>('/products');

    return data;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
