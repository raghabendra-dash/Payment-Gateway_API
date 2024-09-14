import generateSignature from './generateSignature.js';

const orderId = 'order_Owla3eqsYspyiU'; // created using POSTMAN API 
const paymentId = 'pay_test_id';
const secret = 'Pex5qK2p9McIItOXYUy0R5f2'; //API SECRET from RAZORPAY

const signature = generateSignature(orderId, paymentId, secret);
console.log('Generated Signature:', signature);
