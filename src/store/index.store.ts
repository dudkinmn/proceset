import { createStore, combineReducers } from "redux";
import { getReduser } from "./index.reduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReduser } from "redux-form";

const redusers = combineReducers({
  counter: getReduser,
  user: getReduser
});

const store = createStore(getReduser, composeWithDevTools());

export default store;
