const Fabricantes = require('./fabricantes');
const Articulos = require('./articulos');

Fabricantes.hasMany(Articulos);
Articulos.belongsTo(Fabricantes);