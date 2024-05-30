import express from "express";
import multer from "multer";
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
  readMore,
  getPdfFile,
} from "../controller/bookController.js";

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", booksRoute); // get all books.
router.get("/:id", bookRoute);
router.get("/all/:type", categoryRoute);
router.post("/create", createBook); // create a book.
router.post("/request", requestRoute); // request a book to admin.
router.get("/request/all", requestedBooksRoute); // get all the requested Books.
router.get("/rentals/all", getAllRentalsRoute); //Get all the rented (curr) books.
router.post("/request/one", moveToRentedRoute); //get one particular book => move to rented book => delete it from requested
router.put("/returned/update", returnedStatChange); // book returned from user and updated!

router.post('/readMore', upload.single('pdfFile'), readMore); // Add the readMore route
router.get('/readMore/:bookId', getPdfFile);

export default router;
