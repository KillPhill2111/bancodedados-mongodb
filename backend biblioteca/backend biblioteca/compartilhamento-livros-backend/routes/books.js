const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { authenticateToken } = require('../middleware');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', authenticateToken, async (req, res) => {
    // Implementar a lógica de criação de um novo livro
});

router.delete('/:id', authenticateToken, async (req, res) => {
    // Implementar a lógica de exclusão de um livro
});

module.exports = router;
