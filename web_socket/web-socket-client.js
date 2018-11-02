const WS=new WebSocket('ws://localhost:4000');

WS.onmessage = (payload)=>{
    //console.log(payload.data);
    displayMessages(payload.data);
};

WS.onopen = ()=>{
    displayTitle("CONNECTION OPEN");
};

WS.onclose = ()=>{
    displayTitle("CONNECTION CLOSE");
};


function displayTitle(title){
    document.querySelector("h1").innerHTML = title ;
};

function displayMessages(message){
    const h1 = document.createElement("h1");
    h1.innerHTML = message;
    document.querySelector("div.messages").appendChild(h1);
};

document.forms[0].onsubmit = () =>{

    let input = document.getElementById('message');

    //console.log(input.value);

    WS.send(input.value);

    input.value="";

};