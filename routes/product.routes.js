const express = require('express');
const product = express();

const cat_routes = require("./category.routes");
//http://localhost:4321/category
product.use("/category",cat_routes);

// product.post("/product",(req, res)=>{
//     let price = 10000;
//     if(price >= 9000){
//     res.json({
//         result: null,
//         status: true,
//         msg: "These are cheap"
//     });
// }else{
//     res.json({
//         result: null,
//         status: false,
//         msg: "These are expensive"
//     });
// }
// })

module.exports = product;