var express = require('express');
var app = express(); 

app.get('/',(req, res)=>{
   res.send("OK GET");
});
app.post('/',(req, res)=>{
    res.send("OK POST");
});
app.put('/',(req, res)=>{
    res.send('OK PUT');    
});
app.delete('/',(req, res)=>{
    res.send('OK DELETE');
});

app.listen(88,()=>{
    console.log("Servidor ativo  na porta 88");
});