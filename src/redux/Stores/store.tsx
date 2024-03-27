import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "../Slices/loginSlice";
import signupSlice from "../Slices/signupSlice";
import movieShowSlice from "../Slices/movieShowSlice";
import theaterDataSlice from "../Slices/theatreDataSlice";
import movieBookingSlice from "../Slices/movieBookingSlice";
import userTicketSlice from "../Slices/userTicketSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  signup: signupSlice,
  movies: movieShowSlice,
  theatre: theaterDataSlice,
  movieBooking: movieBookingSlice,
  myTicket: userTicketSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
