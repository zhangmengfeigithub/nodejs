const express =require('express')
var server =express()

//user模块
var routerUser=express.Router()
routerUser.get('/1.html',function(req,res){
   res.send('user1')
})
routerUser.get('/2.html',function(req,res){
    res.send('user2')
 })
server.use('/article',routerUser)
//article模块
var articleRouter=express.Router();
server.use('/article', articleRouter);

articleRouter.get('/10001.html', function (req, res){
  res.send('asdfasdfasdf');
});
articleRouter.get('/10002.html', function (req, res){
    res.send('1002');
  });

server.listen(8082)
