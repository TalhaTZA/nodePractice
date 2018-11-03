const fs=require('fs');

fs.writeFile("file.html",`<html><head><body><p>html file created using file system node library</p></body></head></html>`,'utf8',(err)=>{
    
    if(err){
        return err;
    }
    
    console.log("File created");
});