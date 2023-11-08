const mongoose = require("mongoose");
const { Schema } = mongoose;

const mensajeSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
});

module.exports = mongoose.model("Mensaje", mensajeSchema);
