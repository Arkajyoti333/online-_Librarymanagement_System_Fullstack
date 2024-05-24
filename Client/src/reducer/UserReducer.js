const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
