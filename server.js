const express = require('express');
const server = express();
const path = require ('path');





server.get('/',(req,res)=>{
    res.send('Hola mundo');
})

server.get('/eche',(req,res)=>{
    res.send('julito el zurdito');
})

server.get('/eche/julito',(req,res)=>{
    res.send('pude hacer un server');
})

server.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html' ))
})




server.listen(3002,() => {
     console.log('server is runnin in port : 3002');
})


