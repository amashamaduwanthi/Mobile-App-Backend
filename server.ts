import express from 'express';

import orderRoutes from "./routes/order-routes";
import authRoutes, {authenticateToken} from "./routes/authRoutes";
import dotenv from "dotenv";
import cors from 'cors';
const app = express();

app.use(express.json());


dotenv.config();


app.use(cors({
    origin: 'http://localhost:8081',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/order',orderRoutes);
app.use('/auth',authRoutes)


app.listen(3005, (err=>{
    console.log("Server running on port 3002");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);
app.use(authenticateToken);