const fs=require('fs');

fs.readdir("./",(err,content)=>{
    console.log(content);
});

fs.readFile("lib.js","UTF-8",(err,content)=>{
    console.log(content);
});