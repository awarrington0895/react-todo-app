import rootReducer from "./reducers";
import { createStore } from "redux";

const configureStore = initialState => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
