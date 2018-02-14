var express=require('express')
var server=express()
var bodyParser=require('body-Parser')
server.listen(8078)

server.use(bodyParser.urlencoded({
    ectended:true,
    limit:2*1024
}))
server.use('/',function (req,res) { 
    console.log(req.body)
 })
