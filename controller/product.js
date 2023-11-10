import {request,response} from "express";
import {Product}   from "../model/productModel.js";

import axios from "axios";


export const createProduct =async (  req ,res )=>{

    try{
        const {
          
            rank,
        productid,
          title,
        description,
         status,
          images,
           Array,
           price,
         compareprice,
            sku,
          barcode,
           hscode,
         updatedAt,
          createdAt,
          inventory
        }=req.body;
      const data ={
      
        rank,
    productid,
      title,
    description,
     status,
      images,
       Array,
       price,
     compareprice,
        sku,
      barcode,
       hscode,
     updatedAt,
      createdAt,
      inventory,
      } 
      const check =await Product.find({ productid });
      console.log("chkkkkkkkkkkkk",check);
      if (check.length >= 1) {
        res.status(300).json({
            message: "already exist"
            
        });
    } else {
        await Product.create(data);
        res.status(200).json({
            message: "user registered"
           
        });
    }
    }catch(error){
        console.log(error);
        res.status(400).json({
            message : "error"
        })
       
    }


};

export const getProduct= async(req,res)=>{
  const product=await Product.findById(req.params.productid);
  if(!product){
      res.status(404);
      throw new Error("product  not found");
      
  }
  res.status(200).json(product);
  
};
