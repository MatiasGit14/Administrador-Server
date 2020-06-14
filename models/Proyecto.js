const mongoose = require("mongoose");

const ProyectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId, // Es como el Join de SQL para asociar el ID del usuario con sus proyectos
    ref: "Usuario", // Referencia al model para realcionar con el id del usuario
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);
