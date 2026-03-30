import { configureStore } from '@reduxjs/toolkit';
import { Postslice } from './slice';

export const store = configureStore({
  reducer: {
    [Postslice.reducerPath]: Postslice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(Postslice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
