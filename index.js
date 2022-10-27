const express = require ("express");
const app = express();
const port = 3000; 

app.use(express.json) 










app.listen(port, ()=>{
    console.log(`La base de datos está up y está alojada en el puerto => ${port}`);
})