// routes/paymentRoutes.js
const express = require('express');
const Payment = require('../models/Payment');
const router = express.Router();

// Ruta para crear un nuevo pago
router.post('/create', async (req, res) => {
  const { userId, amount, paymentMethod } = req.body;

  try {
    const newPayment = new Payment({
      user: userId,
      amount,
      paymentMethod,
      paymentStatus: 'pending'
    });

    await newPayment.save();
    res.status(201).json({ message: 'Pago creado', payment: newPayment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta para verificar el estado del pago
router.get('/status/:paymentId', async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }

    res.json({ paymentStatus: payment.paymentStatus });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
