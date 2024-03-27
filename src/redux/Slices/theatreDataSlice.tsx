import { createSlice } from "@reduxjs/toolkit";
import { showTheatreData } from "../Thunk/theatreDataThunk";
import { TheatreData } from "../../pages/ChoosingSchedule/theatreData";

export interface InitialStateTheatre {
  theatreData: TheatreData[];
  theaterloading: boolean;
  error: String;
}

export const theatreDataSlice = createSlice({
  name: "schedule",
  initialState: {
    theatreData: [],
    theaterloading: false,
    error: "",
  } as InitialStateTheatre,
  reducers: {
    showAllTheatreData: (state) => {
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

export const { showAllTheatreData } = theatreDataSlice.actions;
export default theatreDataSlice.reducer;


//import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TheatreData } from "../../pages/ChoosingSchedule/theatreData";

// export interface InitialStateTheatre {
//   theatreData: TheatreData[];
//   theaterloading: boolean;
//   error: string;
// }

// const initialState: InitialStateTheatre = {
//   theatreData: [],
//   theaterloading: false,
//   error: "",
// };

// export const theatreDataSlice = createSlice({
//   name: "schedule",
//   initialState,
//   reducers: {
//     showAllTheatreDataPending: (state) => {
//       state.theaterloading = true;
//     },
//     showAllTheatreDataFulfilled: (
//       state,
//       action: PayloadAction<TheatreData[]>
//     ) => {
//       state.theaterloading = false;
//       state.theatreData = action.payload;
//     },
//     showAllTheatreDataRejected: (state, action: PayloadAction<string>) => {
//       state.theaterloading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   showAllTheatreDataPending,
//   showAllTheatreDataFulfilled,
//   showAllTheatreDataRejected,
// } = theatreDataSlice.actions;
// export default theatreDataSlice.reducer;