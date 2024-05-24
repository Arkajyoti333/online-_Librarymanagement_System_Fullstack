import { combineReducers } from "redux";
import toggleCard from "./toggleCard";
import booksReducer from "./booksReducer";
import UserReducer from "./UserReducer";
import extraReducer from "./extraReducer";
import AdminReducer from "./AdminReducer";

const allReducers = combineReducers({
  toggler: toggleCard,
  books: booksReducer,
  user: UserReducer,
  extras: extraReducer,
  admin: AdminReducer,
});

export default allReducers;
