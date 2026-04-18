import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  // Add other slices here: auth, courses, user, etc.
});

export default rootReducer;
