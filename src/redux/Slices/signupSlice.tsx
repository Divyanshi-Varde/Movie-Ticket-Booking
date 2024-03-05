import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface signupState {
  fname: string;
  phone: string;
  email: string;
  password: string;
  signupState: boolean;
}

const initialState: signupState = {
  fname: "",
  phone: "",
  email: "",
  password: "",
  signupState: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setFname: (state, action: PayloadAction<string>) => {
      state.fname = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setsignup: (state, action: PayloadAction<boolean>) => {
      state.signupState = action.payload;
    },
    setSignupclearn_value: (state) => {
      state.fname = "";
      state.phone = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const {
  setFname,
  setPhone,
  setEmail,
  setPassword,
  setsignup,
  setSignupclearn_value,
} = signupSlice.actions;
export default signupSlice.reducer;
