const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/login', async (req, res) => {
    // Implementar a lógica de autenticação
});

router.post('/register', async (req, res) => {
    // Implementar a lógica de registro de usuário
});

module.exports = router;
