const initialState = {
  content: null,
  acceptedRequest: [],
  declinedRequest: [],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return {
        ...state,
        content: action.payload,
      };
    case "ACCEPT_BOOK_REQUEST":
      return {
        ...state,
        acceptedRequest: [...state.acceptedRequest, ...action.payload],
      };
    case "DECLINE_BOOK_REQUEST":
      return {
        ...state,
        declinedRequest: [state.declinedRequest, ...action.payload],
      };
    default:
      return state;
  }
};
export default AdminReducer;
