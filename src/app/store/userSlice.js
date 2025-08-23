import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,   // will hold {name, email, ...}
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;   // payload = {name, email, ...}
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }; 
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
