const webSocketServer=require('ws').Server;

const WSS=new webSocketServer({port:4000});

WSS.on('connection',(ws)=>{
    console.log("Connected to server");
})