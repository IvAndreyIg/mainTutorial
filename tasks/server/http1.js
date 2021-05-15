const http=require('http');


const port="8010";

const host="127.0.0.1"


const server= http.createServer((req,res)=>{

    res.statusCode="200";

    res.setHeader('Content-Type',"text/explain")

    res.end('hello world');

})





server.listen(port,host,()=>{
    console.log("server start");
})



setTimeout(x=>{
    console.log("stop");
},1000)

