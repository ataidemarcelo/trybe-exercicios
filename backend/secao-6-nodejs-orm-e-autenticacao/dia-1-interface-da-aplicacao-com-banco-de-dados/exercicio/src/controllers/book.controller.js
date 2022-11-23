const { BookService } = require('../services');

const findAll = async (req, res) => {
  const { author } = req.query;
  console.log(author);
  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.findAll();
  }

  res.status(200).json(books);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const book = await BookService.findById(Number(id));

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const book = await BookService.create({ title, author, pageQuantity });

  return res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedBook = await BookService.update(id, { title, author, pageQuantity });

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(201).json(updatedBook);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);
  
  if (!removed) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
