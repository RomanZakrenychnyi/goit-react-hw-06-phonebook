import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/filterSlice';
import contactsReducer from './contact/contactSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});