const initialState = {
  bookInHand: null,
  rentedHistory: null,
  requestedBooks: null,
};

const extraReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_BOOK_IN_HAND":
      return {
        ...state,
        bookInHand: action.payload,
      };
    case "UPDATE_RENTED_HISTORY":
      return {
        ...state,
        rentedHistory: action.payload,
      };
    case "UPDATE_REQUESTED_BOOKS":
      return {
        ...state,
        requestedBooks: action.payload,
      };
    default:
      return state;
  }
};

export default extraReducer;
