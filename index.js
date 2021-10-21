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

app.get('/:id',(req,res)=>{
    const id= req.params.id;
    const user=Service.getUser(id)
    res.json(
       { message: "Resultados de la busqueda",
        body:user,
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


app.put('/:id',(req,res)=>{
    const id=req.params.id;
    let {body: newUser}=req;
    const user= Service.editUser(id,newUser)
    res.send(user)
});

app.delete('/:id',(req,res)=>{
    const id=req.params.id;
});

 app.listen(3000,'localhost');