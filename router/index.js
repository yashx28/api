const express=require('express')
const router=express.Router()
const st=require('../controler/studentlist')
 const rd=require('../controler/readfile')
 const sttt=require('../controler/readteacher')
 const sstudent=require('../controler/readstudent')


 router.get('/getreadstudentdata',sstudent.readstudentdata)
 router.post('/addreadstudentdata',sstudent.readstudentadd)
 router.put('/upadtestudentdata',sstudent.updatestudentadd)
 router.delete('/deletestudentdata',sstudent.deletestudentadd)


 router.get('/getreaddata',sttt.readteacherdata)
 router.post('/addreaddata',sttt.readteacheradd)
 router.put('/upadtereaddata',sttt.updateteacheradd)
 router.delete('/deletereaddata',sttt.deleteteacheradd)

 router.get('/datastudentlist',st.readdata)
 router.get('/getstudentlist',(req,res)=>{
  res.send({
    message:200,
    status:500,
  })
})



router.post('/insertdata',(req,res)=>{
  res.send({
    status:200,
    message:req.body.name,
    other:req.query
  })
})

module.exports=router