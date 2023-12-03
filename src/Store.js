// store.js

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // if you're using Redux Thunk middleware
// import { composeWithDevTools } from 'redux-devtools-extension'; // Corrected import
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userReducer from "./Feature/reducer"; 
import assetReducer from './Feature/assetSlice';// replace with the path to your root reducer

// Middleware configuration (you can include other middleware as needed)
const middleware = [thunk]; // Example with Redux Thunk

// Redux persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  asset: assetReducer,
  
});

// Create a persisted reducer with the root reducer and persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer and middleware
const store = createStore(
  persistedReducer,
  // composeWithDevTools(applyMiddleware(...middleware))
);

// Create a persisted version of the store
const persistor = persistStore(store);

export { store, persistor };
