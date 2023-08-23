// reducers/index.js

import { combineReducers } from "redux";
import authReducer from "./auth";
// import exercisesReducer from "./exercises";

const rootReducer = combineReducers({
  auth: authReducer,
  // exercises: exercisesReducer,
});

export default rootReducer;
