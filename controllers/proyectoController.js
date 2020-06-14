const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

exports.crearProyecto = async (req, res) => {
  //Revisar si hay errores en el request
  const errores = validationResult(req);

  //errores.isEmpty() va a dar false si efectivamente hay errores dentro del objeto errores, entonces lo niego con (!) para que pase a true y entre al if
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    // Crear un nuevo proyecto
    const proyecto = new Proyecto(req.body);

    //Guardar el creador via JWT
    proyecto.creador = req.usuario.id;

    //Guardamos el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Obtener todos los proyectos de un usuario validado

exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ proyectos });
  } catch (error) {
    console.log("error");
    res.status(500).send("Hubo un error");
  }
};
