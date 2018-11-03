const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
    if (err) { throw err};

    console.log("Connected");

    const db = client.db("animals");

    // db.collection('mamals').insertOne({
    //     name: "Cat"
    // },(err,result)=>{
    //     if(err) {throw err};

    //     console.log(`inserted ${result}`);
    // });
    

});