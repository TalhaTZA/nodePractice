const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
    if (err) { throw err};

    console.log("Connected");

    const db = client.db("animals");

    //CREATE

    // db.collection('mamals').insertOne({
    //     name: "Cat"
    // },(err,result)=>{
    //     if(err) {throw err};

    //     console.log(`inserted ${result}`);
    // });

    //READ

    db.collection('mamals').find().toArray((err,result)=>{
        if (err) {throw err};

        console.log(result);
    });

    //UPDATE

    // db.collection("mamals").findOneAndUpdate(
    //     {
    //         _id: new ObjectId('5bdd6c7c4471832594d3a9a2')
    //     } ,
    //     {
    //         $set : {
    //             name: "horse",
    //             legs: 4
    //         }
    //     }
    
    // ).then(result =>{
    //     console.log(result);
    // }).catch(err => {throw err});


    //DELETE

    // db.collection("mamals").findOneAndDelete({

    //     _id: new ObjectId('5bdd6c7c4471832594d3a9a2')
    
    // }).then(result=>{
    //     console.log(result);
    // }).catch(err=>{throw err});

});