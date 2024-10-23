import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
// import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer
  },
  // middleware:[thunk]
});

export default store