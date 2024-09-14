import { instance } from '../server.js'; 
import Payment from '../model/paymentSchema.js';
import generateSignature from '../generateSignature.js'; 

// Create order
export const checkOut = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), // convertion to paise
    currency: 'INR',
  };

  try {
    const order = await instance.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Checkout Error:', error); // Log the error
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Verify payment
export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    try {
      const generated_signature = generateSignature(razorpay_order_id, razorpay_payment_id, process.env.RAZORPAY_API_SECRET);
  
      if (generated_signature === razorpay_signature) {

        //Will Save to MongoDB
        await Payment.create({
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature
        });

        res.status(200).json({ success: true, message: 'Payment verified successfully' });
      } else {
        res.status(400).json({ success: false, message: 'Invalid signature' });
      }
    } catch (error) {
      console.error('Payment Verification Error:', error); 
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  
