// models/User.js
const mongoose = require('mongoose');

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }], // Relacionar pagos
  isAdmin: { type: Boolean, default: false }, // Indicar si es administrador
  createdAt: { type: Date, default: Date.now }
});

// Crear y exportar el modelo
const User = mongoose.model('User', userSchema);
module.exports = User;
