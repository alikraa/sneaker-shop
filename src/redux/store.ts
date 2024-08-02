import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shop-slice';

export const store = configureStore({
  reducer: {
    shopData: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
