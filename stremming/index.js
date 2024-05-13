const fs = require("fs");
const http = require("http");
const Server= http.createServer();
Server.on("request",(req,res)=>{
   
    // fs.readFile("input.txt","utf-8",(err,data)=>{if (err) return console.log(err)
    // res.end(data)})


    // 2nd way
    // const rstream = fs.createReadStream("input.txt")
    // rstream.on("data",(chunkdata)=>{
    //     res.end(chunkdata);
    // });
    // rstream.on('end',()=>
    // res.end(end));
    // rstream.on('error',(err)=>{console.log(err)
    // res.end("file not fond")});

    // 3rd way
    // const rstream=fs.createReadStream("input.txt");
    // rstream.pipe(res);

});
Server.listen(3000,"127.0.0.1");