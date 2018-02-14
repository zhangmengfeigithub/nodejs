const jade =require('jade')
var str=jade.renderFile('./views/6.jade',{pretty:true,a:3,b:4})
console.log(str) 