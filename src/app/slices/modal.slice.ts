/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface IModalState {
  isOpen: boolean;
}

const initialState: IModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectIsOpen = (state: RootState) => state.modal.isOpen;
export const { toggleIsOpen } = modalSlice.actions;
export default modalSlice.reducer;
