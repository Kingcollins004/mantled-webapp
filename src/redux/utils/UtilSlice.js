import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: {
    message: null,
    type: "",
    title:""
  },
  isLoading: false,
  searchQuery: "",
  welcomeModal: false,
  drawerOpen : false,
  notificationOpen : false
};

const UtilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    createResponse: (state, action) => {
      state.response = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    setWelcomeModal: (state, action) => {
      state.welcomeModal = action.payload;
    },
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    setNotificationOpen: (state, action) => {
      state.notificationOpen = action.payload;
    },
  },
});

export const { setLoading, createResponse, setWelcomeModal, setDrawerOpen, setNotificationOpen } = UtilSlice.actions;

export default UtilSlice.reducer;
