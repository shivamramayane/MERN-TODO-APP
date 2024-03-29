import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import allRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());


// app.use((err, req, res, next) => {
//     const status = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(status).json({ message, stack: err.stack });
//   });
// routes
app.use('/api', allRoutes);

const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb+srv://shivam123:7582944@cluster0.ilxtxcz.mongodb.net/shivam");
        console.log("MONGO CONNECTED");
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
 app.listen(3001,()=>{
    connectDB();
    console.log(`server in runing  at port `)
 })