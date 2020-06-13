const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.crearUsuario = async (req, res) => {
  //Revisar si hay errores en el request, retorna un array
  const errores = validationResult(req);

  //errores.isEmpty() va a dar false si efectivamente hay errores dentro del objeto errores, entonces lo niego con (!) para que pase a true y entre al if
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  //Extaer email y password para validaciones
  const { email, password } = req.body;
  try {
    //Revisar que el usuario registrado sea unico
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    //crea el usuario
    usuario = new Usuario(req.body);

    //Hashear el password
    const salt = await bcryptjs.genSalt(10);

    usuario.password = await bcryptjs.hash(password, salt);

    //guardar el usuario
    await usuario.save();

    //Mensaje de confirmacion
    res.json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
