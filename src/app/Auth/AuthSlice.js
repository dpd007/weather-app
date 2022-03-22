import { createSlice } from "@reduxjs/toolkit";
const initalAuthState = { isAuthenticated: false };
const AuthSlice = createSlice({
  name: "auth",
  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
