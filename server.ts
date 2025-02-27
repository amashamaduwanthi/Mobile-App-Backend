import express from 'express';

import orderRoutes from "./routes/order-routes";

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});
app.use('/order',orderRoutes);


app.listen(3005, (err=>{
    console.log("Server running on port 3002");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
