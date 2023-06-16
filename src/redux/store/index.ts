import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/redcers';


export const store = configureStore({reducer:rootReducer});


export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
