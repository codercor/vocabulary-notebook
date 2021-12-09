import { configureStore } from '@reduxjs/toolkit';
import  WordsSlice  from './Slices/WordsSlice'
export const store = configureStore({
  reducer: {
    words:WordsSlice
  },
});
