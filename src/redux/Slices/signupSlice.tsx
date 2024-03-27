import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface signupState {
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

const SignupSlice = createSlice({
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
    setSignup: (state, action: PayloadAction<any>) => {
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
  setSignup,
  setSignupclearn_value,
} = SignupSlice.actions;
export default SignupSlice.reducer;
