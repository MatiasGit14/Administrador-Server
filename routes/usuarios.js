// Rutas de usuarios
const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usariosController");

//Crea un usuario
//Sera la ruta de /api/usuarios

router.post("/", usuariosController.crearUsuario);

module.exports = router;
