const mongoose = require("mongoose");

const TareaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: Boolean,
    default: false,
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
  proyecto: {
    type: mongoose.Schema.Types.ObjectId, // Es como el Join de SQL para asociar el ID del usuario con sus proyectos
    ref: "Proyecto", // Referencia al model para realcionar con el id del usuario
  },
});

module.exports = mongoose.model("Tarea", TareaSchema);
