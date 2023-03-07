const jdenticon = require("jdenticon");
const express = require('express')
const Datastore =require('nedb')
const Buffer = require('buffer/').Buffer
const cors = require('cors')




const app =express();
app.listen(3000,() => console.log("listening at 3000"));
app.use(express.static('dist'));
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const allData = [];
app.post('/api',(req,res)=>{
    const {id,name,content} =req.body
    const png = jdenticon.toPng(name, 200);
    const b64 = new Buffer(png).toString('base64');
    allData.push({
        id:id,
        img:b64,
        content:content,
    })
    // console.log(allData)
})

app.get('/api',(req,res)=>{
    res.json(allData)
})
