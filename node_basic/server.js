const http=require('http');

const server=http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'});

    res.end('<h1>Working</h1>');

});

server.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }

    else{
        console.log("Server running on port 4000");
    }
});