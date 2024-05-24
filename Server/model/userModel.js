import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    bookInHand: {
      type: [],
    },
    rentedHistory: {
      type: [],
    },
    membership: {
      type: Boolean,
    },
    favourites: {
      type: [],
    },
    requestedBooks: {
      type: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
export default User;
