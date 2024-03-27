import { createSlice } from "@reduxjs/toolkit";
import { showMoviesData } from "../Thunk/movieDataThunk";
import { Picture } from "../../components/HeroSection/data";

export interface InitialStateMovieData {
  moviesData: Picture[];
  loading: boolean;
  error: String;
}

export const movieShowSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: [],
    loading: false,
    error: "",
  } as InitialStateMovieData,
  reducers: {
    showAllData: (state) => {
      console.log("state.moviesData", state.moviesData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showMoviesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(showMoviesData.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesData = action.payload;
      })
      .addCase(showMoviesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { showAllData } = movieShowSlice.actions;
export default movieShowSlice.reducer;
