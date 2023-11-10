import express from "express";
import {Router} from "express";

import { createProduct,getProduct } from "../controller/product.js";

const router= Router();

router.post('/create',createProduct);
router.get('/getProduct',getProduct);

export default router;