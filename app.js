import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRouter from './routes/paymentRouter.js'; 

dotenv.config();

const app = express();


app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', paymentRouter);

app.get('/', (req, res) => {
    res.send('Server is running');
});

export default app;
