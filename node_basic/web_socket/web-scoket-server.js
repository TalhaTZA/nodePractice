const webSocketServer=require('ws').Server;

const WSS=new webSocketServer({port:4000});

WSS.on('connection',(ws)=>{
    console.log("Connected to server");

    ws.on('message',(message)=>{
        console.log(message);

        if(message==='close'){
            ws.close();
        }

        else{
            WSS.clients.forEach((client)=>{
                client.send(message);
            });
        }
        
    });

});