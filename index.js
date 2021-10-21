 const express = require('express');
 const app=express();
const data=require('./MOCK_DATA.json');

app.get('/',(req,res)=>{
    res.json(
       { message: "Users List",
        body:data}
    );
})


 app.listen(3000,'localhost');