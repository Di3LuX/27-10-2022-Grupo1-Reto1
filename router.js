const express = require('express');
const router = express.Router();

const FabricantesRoutes = require('./views/FabricantesRoutes');
const ArticulosRoutes = require('./views/ArticulosRoutes');


//middleware para las rutas de usuario
router.use('/fabricantes', FabricantesRoutes);
router.use('/articulos', ArticulosRoutes);


module.exports = router;