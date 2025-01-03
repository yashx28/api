var {MongoClient}=require('mongodb');
var url= "mongodb+srv://yashx:yash@2121@cluster0.9d16g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url)
const dbname = 'sample_mflix'
async function main() {
   await client.connect();
   const db=client.db(dbname)
   return db;    
}
module.exports={main}