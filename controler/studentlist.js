const courselist=require('../module/list')
const readdata=(req,res)=>{
    res.send({
        "status":200,
        "message":courselist
    })
}
module.exports={readdata}