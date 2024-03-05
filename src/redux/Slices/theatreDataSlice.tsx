import { createSlice } from "@reduxjs/toolkit";
import { showTheatreData } from "../Thunk/theatreDataThunk";
import { TheatreData } from "../../pages/ChoosingSchedule/theatreData";

export interface InitialStateTheatre {
  theatreData: TheatreData[];
  theaterloading: boolean;
  error: string;
}

export const TheatreDataSlice = createSlice({
  name: "schedule",
  initialState: {
    theatreData: [],
    theaterloading: false,
    error: "",
  } as InitialStateTheatre,
  reducers: {
    showAllTheatreData: (state, action) => {
      console.log("TheatreData:", state.theatreData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showTheatreData.pending, (state) => {
        state.theaterloading = true;
      })
      .addCase(showTheatreData.fulfilled, (state, action) => {
        state.theaterloading = false;
        state.theatreData = action.payload;
      })
      .addCase(showTheatreData.rejected, (state, action) => {
        state.theaterloading = false;
        state.error = action.payload as string;
      });
  },
});

export const { showAllTheatreData } = TheatreDataSlice.actions;
export default TheatreDataSlice.reducer;
