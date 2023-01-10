const express = require('express');
const exp_app = express();

exp_app.get("/", (req, res)=>{
    //return category
})
exp_app.post("/",(req, res)=>{
    //register category 
})
exp_app.put("/:id",(req, res)=>{
    //register category 
    let id = req.params.id;
    // after ? are always query string
    // let query = req.query;
    console.log(id);
})
// /category/electronics/mobile-phones
// /category/:slug/:slug1 
// let slug_1 = req.params.slug_1;

exp_app.delete("/slug",(req, res)=>{
    //register category 
    let slug = req.params.slug;
})
//edit => /category/id
//edit => /category/id   

module.exports= exp_app; 