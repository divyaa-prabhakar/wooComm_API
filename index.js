import express from "express";
import  axios from "axios";
import productroute from "./routes/index.js"
import bodyParser from "body-parser";
import mongoose from 'mongoose';
///import {Product} from './controller/product.js'


const port=6001;
const app=express();


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://NJadaun:njadaun@nitank-test.pp155ts.mongodb.net/?retryWrites=true&w=majority");


//'https://wpondc.ensdevops.com/wp-json/wc/v2/products'

const baseURL = 'https://wpondc.ensdevops.com/wp-json/wc/v2/products';

const consumerKey =  "ck_281ef305d7ce9abaf319a8d12dedf952fd879370"
const ConsumerSecret ="cs_5b101e6f07a3cadd19fa19ec74463a7af5dd9ea5";


const api = axios.create({
  baseURL,
  auth: {
    username: consumerKey,
password: ConsumerSecret
  }
});


// app.get("/products",async function listAllProducts(req,res) {
//   try {
//      const response = await api.get();
//     let details =[];
//      console.log(">>>>>>>>",response);
//     let product;
//     //for(let i=1;i<4;i++){
//     product= await axios({
//       method:'GET',
//       url : 'https://wpondc.ensdevops.com/wp-json/wc/v2/products?limit=50',
//         params: {
//           page: 2,
//           pageSize: 10,
//         },
//       auth: {
//         username: consumerKey,
//     password: ConsumerSecret
//       }
//     })
//     details.push(product);
  
  
//     console.log("product=====>",product.data.length)
//   res.status(200).json({
//     data:details.data,
//   })
//   } catch (error) {
//     console.error('Error retrieving products:', error);
//     throw error;
//   }
// })



//for getting particular product 


app.get("/products",async function listAllProducts(req,res) {
    try {
//pagination added 

      const page=req.query.page;
      const limit=req.query.limit;
      const startIndex=(page -1) *limit;
      const endIndex =page*limit;
      const result=product.slice(startIndex,endIndex);
      res.json(result);
      //console.log(result);
      const response = await app.get();
            //console.log(">>>>>>>>",response);
      const product= await axios({
        method:'GET',
        url : baseURL,
        auth: {
          username: consumerKey,
      password: ConsumerSecret
        }

      })
      // const  page= 2;
      //  const  pageSize= 10;
      //await fetchPaginatedData(page, pageSize), 
      console.log("product data", product.data);
      console.log("product=====>",product.data.length)
    res.status(200).json({
      data:product.data,
    })
    } catch (error) {
      console.error('Error retrieving products:', error);
      throw error;
    }
    listAllProducts();
  });
 
  async function getProduct(){

    //https://wpondc.ensdevops.com/wp-json/wc/v2/products/228
  try {
    const  productId =228; 
    const response = await api.get(`/${productId}`);
    return response.data;
  //console.log(">>>idddddd",response.data)
  } catch (error) {
    console.log ('Error retrieving product data:', error);
    throw error;
  }
  
};
getProduct();




app.use(express.json())
app.use('/product',productroute);

app.get("/health", (req, res) => {
  res.send("Hello World");
 });

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});

