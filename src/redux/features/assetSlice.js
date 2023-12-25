import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingCollaborators: [],
  acceptedCollaborators: [],
};

const AssetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    setPendingCollaborators: (state, action) => {
      state.pendingCollaborators = action.payload;
    },
    setAcceptedCollaborators: (state, action) => {
      state.acceptedCollaborators = action.payload;
    },
  },
});

export const { setPendingCollaborators, setAcceptedCollaborators } =
  AssetSlice.actions;

export default AssetSlice.reducer;
