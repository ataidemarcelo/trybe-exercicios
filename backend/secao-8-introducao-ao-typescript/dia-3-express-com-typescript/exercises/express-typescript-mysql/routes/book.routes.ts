// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/book.controller';

const router = Router();

const booksController = new BooksController();

router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', booksController.create);

export default router;