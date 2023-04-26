import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },

  reducers: {
    setFilter(state, action) {
      state.value = action.payload.toLowerCase();
    },
  },
});

export const { setFilter } = filterSlice.actions;
