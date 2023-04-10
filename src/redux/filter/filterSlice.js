import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    handler(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { handler } = filterSlice.actions;
export default filterSlice.reducer;
