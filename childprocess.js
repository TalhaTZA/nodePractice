const childProcess=require('child_process');

const execute = childProcess.exec;

execute("dir",(err,stdout)=>{
    if(err){
        return err;
    }

    console.log(stdout);
});