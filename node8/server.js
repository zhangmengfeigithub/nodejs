const express=require('express');

var server=express();

//cookie
server.use('/', function (req, res){
  res.cookie('user', 'blue',{path:'/aaa/a.html',maxAge:30*24*3600*1000});

  res.send('ok');
});

server.listen(8083);
