// reducers/auth.js

const initState = {
  isLoggedIn: false,
  user: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
