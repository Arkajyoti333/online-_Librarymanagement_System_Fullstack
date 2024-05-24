import express from "express";
import {
  addFavourites,
  deleteFavourites,
  deleteUser,
  getBookInHand,
  getFavourites,
  getUser,
  getUsers,
  loginRoute,
  registerRoute,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.get("/:id", getUser);
router.get("/", getUsers);
router.put("/edit", updateUser);
router.delete("/delete/:id", deleteUser);
router.put("/addFav", addFavourites);
router.get("/getfav/:id", getFavourites);
router.put("/deletefav", deleteFavourites);
router.get("/get/bookinhand/:id", getBookInHand);
export default router;
