const express = require('express');
const app=express();
const http = require('http').createServer(app);
const PORT=3000;
http.listen(PORT,()=>{
    console.log(`listening to the port ${PORT}`);

});
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/form.html');
});

// socket io
const io = require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log("connected...");
});
