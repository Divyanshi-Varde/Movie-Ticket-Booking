import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Picture } from "../../components/HeroSection/data";

interface MovieBookingState {
  selectedMovie: Picture | {};
  selectedTheatre: {};
  selectedDate: string;
  selectedTime: string;
  theatre_Index: string;
  type_Index: string;
  selecteddimension: {};
  selectedtotal: number;
  selectseat: string[];
  selectdiscount: number;
  selectfinalprice: number;
  moviesData: Picture[];
}
const initialState: MovieBookingState = {
  selectedMovie: {},
  selectedTheatre: {},
  selectedDate: "",
  selectedTime: "",
  theatre_Index: "",
  type_Index: "",
  selecteddimension: {},
  selectedtotal: 0,
  selectseat: [],
  selectdiscount: 0,
  selectfinalprice: 0,
  moviesData: [],
};

const movieBookingSlice = createSlice({
  name: "movieBooking",
  initialState,
  reducers: {
    setMoviesData: (state, action: PayloadAction<Picture[]>) => {
      state.moviesData = action.payload;
    },
    setMovieData: (
      state,
      action: PayloadAction<typeof initialState.selectedMovie>
    ) => {
      state.selectedMovie = action.payload;
    },
    setTheatreData: (
      state,
      action: PayloadAction<{ theatre: typeof initialState.selectedTheatre }>
    ) => {
      state.selectedTheatre = action.payload.theatre;
    },
    resetMovieBooking: (state) => {
      state.selectedMovie = {};
      state.selectedTheatre = {};
      state.selectedDate = "";
      state.selectedTime = "";
      state.theatre_Index = "";
      state.type_Index = "";
      state.selecteddimension = {};
      state.selectedtotal = 0;
      state.selectseat = [];
      state.selectdiscount = 0;
      state.selectfinalprice = 0;
    },
    selectTime: (
      state,
      action: PayloadAction<typeof initialState.selectedTime>
    ) => {
      state.selectedTime = action.payload;
    },
    theatreIndex: (
      state,
      action: PayloadAction<typeof initialState.theatre_Index>
    ) => {
      state.theatre_Index = action.payload;
    },
    typeIndex: (
      state,
      action: PayloadAction<typeof initialState.type_Index>
    ) => {
      state.type_Index = action.payload;
    },
    setdimension: (
      state,
      action: PayloadAction<typeof initialState.selecteddimension>
    ) => {
      state.selecteddimension = action.payload;
    },
    setDate: (
      state,
      action: PayloadAction<typeof initialState.selectedDate>
    ) => {
      state.selectedDate = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
        state.selectedtotal = action.payload;
      
    },
    setSeat: (state, action: PayloadAction<typeof initialState.selectseat>) => {
      state.selectseat = action.payload;
    },
    setdiscount: (
      state,
      action: PayloadAction<typeof initialState.selectdiscount>
    ) => {
      state.selectdiscount = action.payload;
    },
    resetDiscount: (state) => {
      state.selectdiscount = 0;
    },
    setFinalPrice: (
      state,
      action: PayloadAction<typeof initialState.selectfinalprice>
    ) => {
      state.selectfinalprice = action.payload;
    },
  },
});

export const {
  setMovieData,
  setTheatreData,
  resetMovieBooking,
  selectTime,
  theatreIndex,
  typeIndex,
  setdimension,
  setDate,
  setTotal,
  setSeat,
  setdiscount,
  resetDiscount,
  setFinalPrice,
  setMoviesData,
} = movieBookingSlice.actions;

export default movieBookingSlice.reducer;
