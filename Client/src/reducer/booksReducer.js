const initialState = {
  books: null,
  favourite: null,
  loading: false,
  error: false,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "INITIAL_FAV_ADD":
      return {
        ...state,
        favourite: action.payload,
      };
    case "PROG_FAV_ADD":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case "DELETE_FAV":
      return {
        ...state,
        favourite: state?.favourite?.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default booksReducer;
