 const express = require('express');
 const app=express();

const Service=require('./src/service');
app.use(express.json());

app.get('/',(req,res)=>{
    res.json(
       { message: "Users List",
        body:Service.getUsers(),
    }
    );
})

app.post('/',(req,res)=>{
 let {body: newUser}=req;
 const user= Service.createUser(newUser)
 Service.createUser(newUser);
  res.status(201).json(
   { message: 'Usuario Creado',
    body: user ,}
    );
})


 app.listen(3000,'localhost');