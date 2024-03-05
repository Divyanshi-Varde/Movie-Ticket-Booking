import { createAsyncThunk } from "@reduxjs/toolkit";
import { theatreData } from "../../pages/ChoosingSchedule/theatreData"

export const showTheatreData = createAsyncThunk(
  "showTheatreData",
  async (args, { rejectWithValue }) => {
    try {
      const theatreResult = theatreData;
      return theatreResult;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
