const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Articulos extends Model { };

Articulos.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        validate: {
            len: [3, 100]
        }
    },
    precio: DataTypes.INTEGER
},
{
    sequelize,
    modelName: 'articulos',
    freezeTableName: true,
    timestamps: true
});

module.exports = Articulos;