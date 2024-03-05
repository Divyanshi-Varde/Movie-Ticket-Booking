import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedMovie: {},
  selectedTheater: {},
  selectedDate: "",
  selectedTime: "",
  theater_Index: "",
  type_Index: "",
  selecteddimension: {},
  selectedtotal: "",
  selectseat: [],
  selectdiscount: "",
  selectfinalprice: "",
};

const MovieBookingSlice = createSlice({
  name: "movieBooking",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setTheaterData: (state, action) => {
      state.selectedTheater = action.payload.theater;
    },
    resetMovieBooking: (state) => {
      state.selectedMovie = {};
      state.selectedTheater = {};
      (state.selectedDate = ""),
        (state.selectedTime = ""),
        (state.theater_Index = ""),
        (state.type_Index = ""),
        (state.selecteddimension = {}),
        (state.selectedtotal = ""),
        (state.selectseat = []),
        (state.selectdiscount = ""),
        (state.selectfinalprice = "");
    },
    selectTime(state, action) {
      state.selectedTime = action.payload;
    },
    theaterIndex(state, action) {
      state.theater_Index = action.payload;
    },
    typeIndex(state, action) {
      state.type_Index = action.payload;
    },
    setdimension(state, action) {
      state.selecteddimension = action.payload;
    },
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
    settotal(state, action) {
      state.selectedtotal = action.payload;
    },
    setseat(state, action) {
      state.selectseat = action.payload;
    },
    setdiscount(state, action) {
      state.selectdiscount = action.payload;
    },
    resetsetdiscount(state) {
      state.selectdiscount = "";
    },
    setfinalprice(state, action) {
      state.selectfinalprice = action.payload;
    },
  },
});
export const {
  setMovieData,
  setTheaterData,
  resetMovieBooking,
  selectTime,
  theaterIndex,
  typeIndex,
  setdimension,
  setDate,
  settotal,
  setseat,
  setdiscount,
  resetsetdiscount,
  setfinalprice,
} = MovieBookingSlice.actions;
export default MovieBookingSlice.reducer;
