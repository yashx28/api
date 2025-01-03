const db=require('../Database/db')
const readstudentdata=async(req,res)=> {
    const database= await db.main();
    const collection= await database.collection('student')  
    const result =await collection.find({}).toArray()

    res.send({
        "status":2000,
        "meassage":result
    })
    
}

const readstudentadd=async(req,res)=> {
    const database= await db.main();
   // const obj= {id:"1",name:"yash" , email:"yash@gmail.com",}
    const collection= await database.collection('student')
    const result =await collection.insertOne(req.body)

    res.send({
        "status":2000,
        "meassage":result
    })
    
}
const updatestudentadd=async(req,res)=> {
    const database= await db.main();
   // const obj= {id:"1",name:"yash" , email:"yash@gmail.com",}
    const collection= await database.collection('student')
    const result =await collection.updateOne({name:req.query.name},{$set:req.body})

    res.send({
        "status":2000,
        "meassage":result
    })
    
}
const deletestudentadd=async(req,res)=> {
    const database= await db.main();
   // const obj= {id:"1",name:"yash" , email:"yash@gmail.com",}
    const collection= await database.collection('student')
    const result =await collection.deleteOne({name:req.query.name},{$set:req.body})

    res.send({
        "status":2000,
        "meassage":result
    })
    
}

module.exports={readstudentadd,readstudentdata,updatestudentadd,deletestudentadd}