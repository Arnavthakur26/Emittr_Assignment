// store.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// Initial state object
const initialState = {};

const middleware = [thunk];

// Create store with reducers and middleware
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
