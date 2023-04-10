import { createSlice } from '@reduxjs/toolkit';

const initialContact = JSON.parse(localStorage.getItem('contacts'));
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContact,
  reducers: {
    add(state, { payload }) {
      return (state = payload);
    },
    remove(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;