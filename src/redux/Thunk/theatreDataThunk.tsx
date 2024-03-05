import { createAsyncThunk } from "@reduxjs/toolkit";
import { theaterData } from "../../pages/ChoosingSchedule/theatreData"

export const showTheaterData = createAsyncThunk(
  "showTheaterData",
  async (args, { rejectWithValue }) => {
    try {
      const theaterresult = theaterData;
      return theaterresult;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
