import crypto from 'crypto';

const generateSignature = (orderId, paymentId, secret) => {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(orderId + "|" + paymentId);
  return hmac.digest('hex');
};

export default generateSignature;
