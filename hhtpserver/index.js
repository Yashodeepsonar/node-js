// const fs = require("fs");
// const http = require("http");
// const data=fs.readFileSync(`${__dirname}/userAPI/userdata.json`,"utf-8");
// const objdata =JSON.parse(data);

// const server = http.createServer((req,res)=> {
//  if(req.url =='/'){
//     res.end("hello welcom to my page");

// }
// else if(req.url=='/about'){
//     res.end("welcom to my about page");
// }
// else if(req.url=='/contact'){
//     res.end("welcom to my contact page")
// }
// else if(req.url=='/userAPI'){
//     res.writeHead(200,{"content-type":"application/json"}); 
//     res.end(objdata[0].name);
// }

// else{
//     res.writeHead(404,{"content-type":"text/Html"});
//     res.end("<h1>Error:404 not found<div> page not found<\h1>");
// }
// }
// );

// server.listen(3000 , "127.0.0.1" ,()=> console.log("litening port no 3000") );