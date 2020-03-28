import { createStore, combineReducers } from "redux";
import { authorizeReducer } from "./index.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  isAuthorized: authorizeReducer,
  form: formReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;

export type TStore = {
  isAuthorized: boolean,
  form: any
}