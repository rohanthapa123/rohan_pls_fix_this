const express = require('express');
const app = express();

const routes = require('./routes/index');
app.use(routes);

//Body parsers 
app.use(express.json())
app.use(express.urlencoded({
    extended: false  //query string library = xwww.xurl
}))

//404 handling = also known as error handling middleware
app.use(( req, res, next)=>{
    next({status: 404,
         msg:"not found"
        });   //error handling middleware call garchha
});

//garbage collector ==> if 4 scope are used
//only when there is error -this activates  
app.use((error, req, res, next)=>{
    let status = error.status ?? 500;
    let msg = error.msg ?? error;  
    res.status(status).json({
        result: null,
        status: false,
        msg: msg
    })
}) 

app.listen(4321, 'localhost',(err)=>{
    if(!err){   
        console.log("Your server have started on port no. 4321");
        console.log("press CRTL + C to exit the server!!");
    }
})