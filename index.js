const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router');
const PORT = 3000;
require('./models/associations');

app.use(express.json)
app.use(router);


app.listen(PORT, () => {
    console.log(`La base de datos está up y está alojada en el puerto => ${port}`);

    db.sync().then(() => {
        console.log("Conectados a la DB");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error);
    });
})