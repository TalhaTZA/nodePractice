const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{

    if(req.url==='/' && req.method=== 'GET'){
        fs.readFile('data.json','utf8',(err,data)=>{
            if(err){
                return err;
            }
            
            res.writeHead(200,{'Content-Type':'application/json'});

            res.end(data);

        });
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});

        res.end('<h1>404 not found</h1>');

    }

    
});

server.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }

    else{
        console.log("Server running on port 4000");
    }
});