var express = require('express');

var app = express();
var appId = process.env.APPID;

app.get('/',(req, res)=>{
    res.send(`appId : ${appId} say's Hello World!`)
})
app.get('/api',(req, res)=>{

    res.send(`appId : ${appId} say's ${test}`)
})


app.listen(appId, ()=> console.log(`server is listening at ${appId}`));