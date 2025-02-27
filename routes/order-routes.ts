import express from "express";
import Order from "../model/Order";
import {OrderAdd} from "../database/order-prisma-data-store";
const router = express.Router();

router.post('/add',async (req,res)=>{
    console.log(req.body)
    const order= req.body;
    try {
        const newOrder=await OrderAdd(order);
        res.json(newOrder)
    }catch (err){
        console.log("Error Adding Order",err);
        res.send("Error Adding Order").status(400)
    }
})
export default router