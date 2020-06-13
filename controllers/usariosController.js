const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;

    //crea el usuario
    usuario = new Usuario(req.body);

    //guardar el usuario
    await usuario.save();

    //Mensaje de confirmacion
    res.send("Usuario creado correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
