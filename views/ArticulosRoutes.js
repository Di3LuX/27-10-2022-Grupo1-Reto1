const express = require('express');
const router = express.Router();

const Articulos = require('../models/articulos');

// CRUD ARTÍCULOS
router.get('/', async (req, res) => {
    let resp = await Articulos.findAll()
    res.send(resp);
});

module.exports = router;