const http = require("http");
const fs = require("fs");
const request = require("request");
const { json } = require("stream/consumers");
const home=fs.readFileSync("home.html","utf-8");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        request("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=9ff732a3e0aa040aac260d6a030c0bda")
        .on("data",function (chunk) {
            const objdata=JSON.parse(chunk);
            const arrdata=[objdata];
            console.log(arrdata);
        })
        .on("end",(err)=>{
            if(err) return console.log("connection close due to error",err);
            console.log('end');
        });

      
    }

});
server.listen(8000,"127.0.0.1");

