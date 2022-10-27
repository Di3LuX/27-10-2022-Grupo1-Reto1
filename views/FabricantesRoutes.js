const express = require('express');
const router = express.Router();

const Fabricantes = require('../models/fabricantes');

// CRUD FABRICANTES
router.get('/', async (req, res) => {
    let resp = await Fabricantes.findAll()
    res.send(resp);
});

module.exports = router;