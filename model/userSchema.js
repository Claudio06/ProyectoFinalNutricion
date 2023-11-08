const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
nombre: { type: String, required: true },
password: { type: String, required: true }
});

exports.module = mongoose.model("User", userSchema);