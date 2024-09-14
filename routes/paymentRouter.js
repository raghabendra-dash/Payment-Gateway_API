import express from 'express';
import { checkOut, paymentVerification } from '../controllers/paymentController.js';

const router = express.Router();

//route for checkout
router.post('/checkout', checkOut);

//route for payment verification
router.post('/paymentverification', paymentVerification);

export default router;
