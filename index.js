const jdenticon = require("jdenticon");
const express = require('express')
const Datastore =require('nedb')
const Buffer = require('buffer/').Buffer
const cors = require('cors')




const app =express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('dist'));
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const allData = [];
app.post('/api',(req,res)=>{
    const {id,name,content} =req.body
    const png = jdenticon.toPng(name, 40);
    const b64 = new Buffer(png).toString('base64');
    allData.push({
        id:id,
        img:b64,
        content:content,
        timeStamp:Date()
    })
    res.send("ok");
})

app.get('/api',(req,res)=>{
    res.json(allData)
})
