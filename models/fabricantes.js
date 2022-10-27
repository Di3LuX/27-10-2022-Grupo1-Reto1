const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Fabricantes extends Model { };

Fabricantes.init({
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
    }
},
    {
        sequelize,
        modelName: 'fabricantes',
        freezeTableName: true,
        timestamps: true
    });

module.exports = Fabricantes;