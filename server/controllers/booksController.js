import model from "../models/index.js";

const User = model.User;
const Book = model.Book;

/**
 *
 * @Route GET /api/book/add
 * @Access private
 */
export const addBook = async (req, res) => {
  const { name, author, description, startingBid } = req.body;
  try {
    const newBook = new Book({
      name,
      author,
      description,
      startingBid,
      availableForAuction: true,
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create book listing." });
  }
};
/**
 *
 * @Route GET /api/book/add
 * @Access private
 */
export const modifyBook = async (req, res) => {
  const bookId = req.params.id;
  const updates = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, updates, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update book listing." });
  }
};
/**
 *
 * @Route GET /api/book/add
 * @Access private
 */
export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.json({ message: "Book listing deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete book listing." });
  }
};
/**
 *
 * @Route GET /api/book/add
 * @Access private
 */
export const getBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve book." });
  }
};
/**
 *
 * @Route GET /api/book/add
 * @Access private
 */
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ availableForAuction: true });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve books." });
  }
};
