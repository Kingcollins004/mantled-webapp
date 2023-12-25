import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: sessionStorage.getItem("token") || null,
  user: JSON.parse(sessionStorage.getItem("user")) || null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, setToken } = UserSlice.actions;

export default UserSlice.reducer;
