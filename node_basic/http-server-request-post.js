const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

    if(req.method==="GET" && req.url==="/"){
        fs.readFile('./http-form.html','utf8',(err,data)=>{
            if(err){
                throw err;
            }

            res.writeHead(200,{'Content-Type':'text/html'});

            res.end(data);
        });
    }

    else if(req.method==="POST"){
        let body='';

        req.on("data",data=>{
            body+=data;
        });

        req.on("end",()=>{
            res.writeHead(200,{'Content-Type':'text/html'});

            res.write(body,()=>{
                res.end();
            });
        });

    }

    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>404 PAGE NOT FOUND</h1>')
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