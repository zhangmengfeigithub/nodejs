const jade =require('jade')
var str=jade.renderFile('./views/5.jade',{pretty:true,name:'zhangmengfei'})
console.log(str) 