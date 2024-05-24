import express from "express";
const router = express.Router();
import {
  bookRoute,
  booksRoute,
  categoryRoute,
  createBook,
  getAllRentalsRoute,
  moveToRentedRoute,
  requestedBooksRoute,
  requestRoute,
  returnedStatChange,
} from "../controller/bookController.js";

router.get("/", booksRoute); // get all books.
router.get("/:id", bookRoute);
router.get("/all/:type", categoryRoute);
router.post("/create", createBook); // create a book.
router.post("/request", requestRoute); // request a book to admin.
router.get("/request/all", requestedBooksRoute); // get all the requested Books.
router.get("/rentals/all", getAllRentalsRoute); //Get all the rented (curr) books.
router.post("/request/one", moveToRentedRoute); //get one particular book => move to rented book => delete it from requested
router.put("/returned/update", returnedStatChange); // book returned from user and updated!

export default router;
