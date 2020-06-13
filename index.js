const express = require("express");
const conectarDB = require("./config/db");

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar JSON
app.use(express.json({ extended: true }));
//Puerto de la APP
const PORT = process.env.PORT || 4000;

//Importar Rutas
app.use("/api/usuarios", require("./routes/usuarios"));

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});
