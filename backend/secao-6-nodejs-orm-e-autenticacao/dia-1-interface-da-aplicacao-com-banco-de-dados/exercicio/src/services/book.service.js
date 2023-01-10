const { Op } = require("sequelize");
const { Book } = require('../models');

const findAll = async () => {
  const books = await Book.findAll({
    attributes: [['author', 'autor'], ['title','título'], ['pageQuantity', 'qtd Páginas']],
    order: [['title', 'ASC']],
  });
  return books;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ 
    where: { author: { [Op.like]: `${author}%` } },
    order: [['title', 'ASC']],
  });
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });

  return book;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  getByAuthor,
};
