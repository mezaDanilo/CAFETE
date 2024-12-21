const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Para parsear las solicitudes JSON

// Definir rutas
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
