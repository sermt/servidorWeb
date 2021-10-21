const data=require('./MOCK_DATA.json');
module.exports={
    getUsers:()=> data,
  
    getUser:(id)=>{
        const ID=Number(id);
        return data.filter((person)=> person.id===ID);
    },
    editUser:(id,user)=> {
        const ID=Number(id);
        let datos=user;
        const index = data.findIndex(x => x["id"] ==ID);
        datos.id=ID
         data[index]=datos;
        return data;
    },
    createUser: (dataUser)=>{
        let newUser={
            id: data.length+1,
            ...dataUser,
        }
        data.push(newUser);
        return newUser;
    },
};