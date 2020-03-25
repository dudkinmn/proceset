import { createStore, combineReducers } from "redux";
import { getReducer } from "./index.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  counter: getReducer,
  form: formReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;
