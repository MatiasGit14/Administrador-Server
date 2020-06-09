const express = require("express");

const app = express();

//Puerto de la APP
const PORT = process.env.PORT || 4000;

//Definir la pag principal
app.get("/", (req, res) => {
  res.send("Hola mundo desde Node");
});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});
