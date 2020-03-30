import { createStore, combineReducers } from "redux";
import { authorizeReducer, setUserReducer } from "./index.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  isAuthorized: authorizeReducer,
  currentUser: setUserReducer,
  form: formReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;

export type TStore = {
  isAuthorized: boolean,
  currentUser: {
    id: number,
    firstName: string;
    secondName: string;
    email: string;
  },
  form: any
}



