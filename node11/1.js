const ejs =require('ejs')

ejs.renderFile('./views/1.ejs',{name:'zangmengfei'},function(err,data){
    console.log(data)
})