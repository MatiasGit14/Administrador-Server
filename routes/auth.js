// Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authControler = require("../controllers/authController");
const auth = require("../middleware/auth");

//Iniciar sesion
//Sera la ruta de /api/auth
router.post("/", authControler.autenticarUsuario);

//Obtiene el usuario autenticado
router.get("/", auth, authControler.usuarioAutenticado);

module.exports = router;
