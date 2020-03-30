import { TGetUserResponceData } from "../layouts/Authorized/Authorized.types";

export type TAction = {
  type: string;
  payload?: any;
};

export type TGetUserData = {
      id: number;
      firstName: string;
      secondName: string;
      email: string;
  } | undefined


const SET_AUTHORIZED = "SET_AUTHORIZED";
const SET_USER = "SET_USER";

export const actionAuthorize = (payload: boolean) => {
  return {
    type: SET_AUTHORIZED,
    payload: payload
  };
};

export const actionSetUser = (payload: TGetUserData) => {
  
  return {
    type: SET_USER,
    payload: payload
  };
};

export const authorizeReducer = (
  state: boolean = initialStateAuthorized,
  action: TAction
) => {
  switch (action.type) {
    case SET_AUTHORIZED:
      return action.payload;
    default:
      return state;
  }
};

export const setUserReducer = (
  state: TGetUserData = currentUser,
  action: TAction
) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};



const initialStateAuthorized = sessionStorage.getItem("isAuthorized") === "true";
export const currentUser = {
    id: 0,
    firstName: "",
    secondName: "",
    email: ""
  }
