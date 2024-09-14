import mongoose from 'mongoose';

export const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI; 

    if (!mongoUri) {
        throw new Error('MongoDB URI is not defined in the environment variables.');
    }

    try {
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; 
    }
};
