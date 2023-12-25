// userReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setUser } from './actions'; // Adjust the path accordingly

const initialState = {
  name: '',
  token: '',
  // ...other user properties
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      // Update the user state with the payload from the action
      state.name = action.payload.name;
      state.token = action.payload.token;
      // ...update other user properties as needed
    });
});

export default userReducer;