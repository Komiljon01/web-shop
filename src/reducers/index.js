// Reducer

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECR":
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    default:
      return state;
  }
};
