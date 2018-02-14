const ejs =require('ejs')
ejs.renderFile('./views/1.ejs',{name:'zhangmengfei'},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})