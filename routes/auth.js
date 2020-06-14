// Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authControler = require("../controllers/authController");

//Crea un usuario
//Sera la ruta de /api/auth

router.post(
  "/",
  [
    check("email", "Agrega un Email válido").isEmail(),
    check("password", "El password debe ser mínimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  authControler.autenticarUsuario
);

module.exports = router;
