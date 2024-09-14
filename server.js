import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import { connectDB } from './DB/database.js';
import paymentRouter from './routes/paymentRouter.js';

//environment variables from .env file
dotenv.config();

const app = express();

// Initialize Razorpay instance
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', paymentRouter);


const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected');

        app.get('/', (req, res) => {
            res.send('Server is running');
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1); // Exit process with failure code
    }
};

startServer();

export default startServer;
