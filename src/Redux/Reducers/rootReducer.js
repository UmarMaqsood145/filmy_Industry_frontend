import { combineReducers } from "redux";
import { MoviesReducer } from "./MoviesReducer";

const rootReducer = combineReducers({
  MoviesReducer,
});

export default rootReducer;
