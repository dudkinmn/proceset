export type TAction = {
  type: string;
  payload?: any
}

const INCREMENT = "INCREMENT"

export const incAction = () => ({
  type: INCREMENT
})



export const getReducer = (state: any = {count: 12}, action: TAction) => {
  switch(action.type) {
    case INCREMENT: 
      return {
        count: state.count + 1
      }
    default: 
      return state
  }
} 