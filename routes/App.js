const express = require('express');
const dbConnection = require('../db/connect');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

app.get('/profiles/:id',async (req,resp)=>{
    let data = await dbConnection();
    let result = await data.find().toArray();
    // console.log(result)
    resp.send(result);

})

app.post('/profiles', async (req,resp)=>{
    // console.log(req.body);
    let data = await dbConnection()
    let result = data.insertOne(req.body)
    resp.send(result);
})

app.put('/:id', async(req,resp)=>{
    let data = dbConnection();
    let result = (await data).updateOne(

        {_id:new mongodb.ObjectId(req.params.id)},

        {$set:req.body}
    ) 
    resp.send({result:"update"});
})


app.delete('/:id', async (req,resp)=>{
    let data = dbConnection();
    let result = (await data).deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(510)