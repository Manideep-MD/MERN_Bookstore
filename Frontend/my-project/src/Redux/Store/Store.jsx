import { configureStore } from "@reduxjs/toolkit";
// import userDetails from "../userDetails";
import rootReducer from "../rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
