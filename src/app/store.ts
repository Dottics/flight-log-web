import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../store/user-slice'
import flightLogReducer from "../store/flight-log-slice";
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    flightLog: flightLogReducer,
  },
});

type SetupStoreProps = {
  preloadedState?: any;
}

export const setupStore = (options: SetupStoreProps): ToolkitStore => {
  return configureStore({
    preloadedState: options.preloadedState,
    reducer: {
      counter: counterReducer,
      user: userReducer,
      flightLog: flightLogReducer,
    },
  });
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
