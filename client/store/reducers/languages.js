// reducers/languages.js

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGES":
      return action.payload;
    default:
      return state;
  }
};
