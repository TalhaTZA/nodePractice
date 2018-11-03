const https=require('https');
const fs=require('fs');

const url='https://jsonplaceholder.typicode.com/posts';

https.get(url,res=>{
    res.setEncoding('utf8');

    let data='';

    res.on('data',res=>{
        data+=res;
    });

    res.on('end',()=>{

        fs.writeFile('data.json',data,(err)=>{
        
            if(err){
                return err;
            }

            console.log("data retrieved file created");
            
            fs.readFile("./data.json","utf8",(err,data)=>{
                if(err){
                    return err;
                }

                const json_data=JSON.parse(data);
        
                console.log(json_data);

            });

        });
    });

});