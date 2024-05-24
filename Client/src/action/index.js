export const open = () => {
  return {
    type: "OPEN",
  };
};

export const close = () => {
  return {
    type: "CLOSE",
  };
};

export const setX = () => {
  return {
    type: "SET-IN-X",
  };
};

export const setY = () => {
  return {
    type: "SET-IN-Y",
  };
};

export const addBook = (books) => {
  return {
    type: "ADD_BOOKS",
    payload: books,
  };
};

export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};

export const loginUser = (details) => {
  localStorage.setItem("user", JSON.stringify(details));
  return {
    type: "LOGIN_SUCCESS",
    payload: details,
  };
};

export const loginFailed = (response) => {
  return {
    type: "LOGIN_FAILED",
    payload: response,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const addBookInHand = (response) => {
  return {
    type: "UPDATE_BOOK_IN_HAND",
    payload: response,
  };
};

export const addRentedHistory = (response) => {
  return {
    type: "UPDATE_RENTED_HISTORY",
    payload: response,
  };
};

export const addRequestedBooks = (response) => {
  return {
    type: "UPDATE_REQUESTED_BOOKS",
    payload: response,
  };
};

export const addInitFavBooks = (response) => {
  return {
    type: "INITIAL_FAV_ADD",
    payload: response,
  };
};

export const addProgFavBooka = (response) => {
  return {
    type: "PROG_FAV_ADD",
    payload: response,
  };
};

export const deleteFav = (response) => {
  return {
    type: "DELETE_FAV",
    payload: response,
  };
};

export const setContent = (response) => {
  return {
    type: "SET_CONTENT",
    payload: response,
  };
};

export const acceptReq = (response) => {
  return {
    type: "ACCEPT_BOOK_REQUEST",
    payload: response,
  };
};

export const declineReq = (response) => {
  return {
    type: "DECLINE_BOOK_REQUEST",
    payload: response,
  };
};
