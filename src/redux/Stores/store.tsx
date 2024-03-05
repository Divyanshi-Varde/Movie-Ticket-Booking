import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "../Slices/loginSlice";
import signupSlice from "../Slices/signupSlice";
// import MovieSlice from "../Slice/MovieSlice";
// import TheaterDataSlice from "../Slice/TheaterDataSlice";
// import UpcommaingSlice from "../Slice/UpcommaingSlice";
// import MovieBookingSlice from "../Slice/MovieBookingSlice";
import userTicketSlice from "../Slices/userTicketSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  signup: signupSlice,
//   movies: MovieSlice,
//   theator: TheaterDataSlice,
//   upcomingMovie: UpcommaingSlice,
//   movieBooking: MovieBookingSlice,
  myTicket: userTicketSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
