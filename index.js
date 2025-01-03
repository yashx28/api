 const express=require('express')
const indexRouter=require('./router/index')
const app=express();
app.use(express.json())
app.use("/",indexRouter)

app.listen(3001,function(){
  console.log("api started ")
})








// const fs=require('fs')
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.year); //returns 'february'

// fs.writeFile('mynewfile3.txt', 'dipesh soch yaar', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });
//   fs.rename('mynewfile3.txt', 'mydipeshfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });
  //  fs.unlink('mydipeshfile.txt', function (err) {
  //    if (err) throw err;
  //    console.log('File deleted!');
  // });
// fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
// console.log("hello");
// console.log("directory name is"+__dirname)
// console.log("file name is"+__filename)