// assetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const assetSlice = createSlice({
  name: 'asset',
  initialState: [],
  reducers: {
    setAssets: (state, action) => {
      // Update assets in the state
      return action.payload;
    },
  },
});

export const { setAssets } = assetSlice.actions;
export const selectAssets = (state) => state.asset;
export default assetSlice.reducer;
