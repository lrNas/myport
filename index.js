const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>
{   
    res.sendFile(path.join(__dirname,"/index.html"))
})


app.get('/:var1', function(req, res) {
    let p1 = req.params.var1
    res.sendFile(__dirname + "/" + p1);
  });

app.get('/:var1/:var2',(req,res)=>
{   
    let p1 = req.params.var1
    let p2 = req.params.var2
    res.sendFile(__dirname + "/" + p1+"/"+p2);
})

app.get('/:var1/:var2/:var3',(req,res)=>
{   
    let p1 = req.params.var1
    let p2 = req.params.var2
    let p3 = req.params.var3
    res.sendFile(__dirname + "/" + p1+"/"+p2+"/"+p3);
})


app.listen(8000,()=>{console.log("Started")})