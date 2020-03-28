export type TAction = {
  type: string;
  payload?: any
}

const SET_AUTHORIZED = "SET_AUTHORIZED"
const SET_USER = "SET_USER"

export const actionAuthorize = (payload: boolean) => {
  return {
      type: SET_AUTHORIZED,
      payload: payload
  }
}

export const authorizeReducer = (state: boolean = initialStateAuthorized, action: TAction) => {
  switch (action.type) {
      case SET_AUTHORIZED:
          return action.payload;
      default:
          return state;
  }
}

let initialStateAuthorized = sessionStorage.getItem('isAuthorized') == "true" ? true : false 

