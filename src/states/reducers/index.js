import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const combinedReducers = combineReducers({
    amount : amountReducer,
  // Add your reducers here 
  });

  export default combinedReducers;