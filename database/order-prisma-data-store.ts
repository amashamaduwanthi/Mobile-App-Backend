import Order from "../model/Order";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function OrderAdd(order:Order){
    try{
        const added_order=await prisma.orders.create({
            data:{
                orderId:order.orderId,
                totalPayment:order.totalPayment,
                customerName:order.customerName,
                contactNo:order.contactNo,
                address:order.address
            }
        });
        console.log('added order successfully',added_order);
        return added_order;

    }catch (error) {
        console.log('error adding order',error)
    }

}