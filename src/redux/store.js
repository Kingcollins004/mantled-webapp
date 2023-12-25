import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import assetReducer from "./features/assetSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    asset: assetReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
