const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareasController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Crear Tareas
//api/tareas
router.post(
  "/",
  auth,
  [check("nombre", "El nombre de la tarea es obligatorio").not().isEmpty()],
  [check("proyecto", "El proyecto es obligatorio").not().isEmpty()],
  tareasController.crearTarea
);

//Obtener todas las tareas
router.get("/", auth, tareasController.obtenerTareas);

//Actualizar una tarea por ID
router.put("/:id", auth, tareasController.actualizarTarea);

//Eliminar una tarea por ID
router.delete("/:id", auth, tareasController.eliminarTarea);

module.exports = router;
