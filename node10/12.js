const jade=require('jade');
const fs =require ('fs')
var str =jade.renderFile('./views/test.jade', {pretty: true})
fs.writeFile('./build/1.html',str,function(err){
    if(err){
        console.log('出错了')
    }else{
        console.log('成功')
    }
})


 