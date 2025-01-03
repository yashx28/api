
 var fs=require('fs');
 const readfile=(req,res)=>{
     const data =fs.readFileSync('D:/node app/demo.txt',
     {encoding:'utf8',flag:'r'});

     res.send({
         "status":2000,
         "meassage":data
     })
 }
 module.exports={readfile}