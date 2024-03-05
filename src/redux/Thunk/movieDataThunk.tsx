import { createAsyncThunk } from "@reduxjs/toolkit";
import movies from "../../components/HeroSection/data";

export const showMoviesData = createAsyncThunk(
  "showMoviesData",

  async (args, { rejectWithValue }) => {
    try {
      const movieResult = movies;
      return movieResult;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
