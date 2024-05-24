import mongoose from "mongoose";

const rentedSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    bookId: {
      type: String,
      required: true,
    },
    bookname: {
      type: String,
      required: true,
    },
    authorname: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    from_date: {
      type: String,
      required: true,
    },
    to_date: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    returned: {
      type: Boolean,
      required: true,
    },
  },
  { timeStamps: true }
);

const Rented = mongoose.model("rentals", rentedSchema);
export default Rented;
