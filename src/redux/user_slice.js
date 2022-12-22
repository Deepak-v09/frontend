import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  loggedIn: true,
};

const user_slice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    AddUserInfo(state, action) {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});
export const user_actions = user_slice.actions;
export default user_slice;
