import { createSlice } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  name: string;
  image: string;
}
export interface Theater {
  id: string;
  name: string;
  dimensionCategory: string;
  time: string;
  price: number;
}
export interface Date {
  date: string;
}
export interface Time {
  time: string;
}
export interface Seat {
  seat: string[];
}
export interface Dimension {
  dimensionCategory: any;
  Dimension: string[];
}
export interface ticketEntry {
  movie: Movie;
  theater: Theater;
  date: Date;
  time: Time;
  dimension: Dimension;
  seats: Seat[] | null;
  totalPrice: number;
  discount: number;
  finalAmount: number;
  randomnumber: number;
}
export interface myTicketState {
  tickets: ticketEntry[];
}

const initialState: myTicketState = {
  tickets: [],
};
const userTicketSlice = createSlice({
  name: "myTicket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.unshift(action.payload);
    },
    reset(state) {
      state.tickets = [];
    },
  },
});
export const { addTicket, reset } = userTicketSlice.actions;
export default userTicketSlice.reducer;
