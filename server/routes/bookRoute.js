import { addBook, getBook, getBooks, modifyBook,deleteBook } from "../controllers/index.js";
import express from "express";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/addBook", auth, addBook);
router.get("/getBooks",getBooks);

router.get("/getBook/:id", auth, getBook);
router.put("/modifyBook/:id", auth, modifyBook);
router.delete("/deleteBook/:id", auth, deleteBook);
// router.post("/addBook", auth, addBook);

export default router;
