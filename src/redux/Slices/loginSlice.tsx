import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface loginState{
  phone:string;
  password:string;
  loginState:boolean
}

const initialState: loginState = {
  phone: "",
  password: "",
  loginState: false,
};

// Create the slice
const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoginState: (state, action: PayloadAction<any>) => {
      state.loginState = action.payload;
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.loginState = action.payload;
    },
    setloginClean_value: (state) => {
      state.phone = "";
      state.password = "";
    },
  },
});

export const {
  setPhone,
  setPassword,
  setLoginState,
  setLogin,
  setloginClean_value,
} = LoginSlice.actions;

export default LoginSlice.reducer;
