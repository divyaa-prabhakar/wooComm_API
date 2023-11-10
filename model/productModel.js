//import mongoose from 'mongoose';
import  { mongoose,Schema } from 'mongoose';

// export const  Product = new mongoose.Schema({
//     rank:Number,
//     title: String,
//     description: String,
//     status: String,
//     images: [],
//     price: Number,
//     compareprice: Number,
//     sku: String,
//     barcode: String,
//     hscode: String,
//     vendor: String,
//      tags: String,
//     productid: String,
//     //new_product_id:string,
//     category_id:String,
//     inventory_item_id:String,
//     required_field:[],
//     // delhi_inventory:string,
//     // banglore_inventory:string,
// });
const productSchema = new Schema({
    title:  String ,
    description: String,
    status: String,
    images: [],
    price: Number,
    compareprice: Number,
    sku: String,
    barcode: String,
    hscode: String,
    vendor: String,
    tags: String,
    productid: String,
    rank: Number,
    //new_product_id: {type:String},
    category_id: String,
    inventory_item_id:String,
    required_field: [],
    // delhi_inventory:{type:String},
    // banglore_inventory:{type:String},
}, { timestamps: true });
// productSchema.index({ title: 1, description: 1 });
export const Product = mongoose.model('Product', productSchema);

//module.exports = { Product };
// export default Product ;
//=mongoose.model('product', productSchema)
//exports deafult Product;