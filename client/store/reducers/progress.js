// reducers/progress.js

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROGRESS":
      return action.payload;
    default:
      return state;
  }
};
