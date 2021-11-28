import { configureStore } from '@reduxjs/toolkit';
import subjectSlice  from 'features/subject/subjectSlice';

export const store = configureStore({
  reducer: {
    subject: subjectSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



