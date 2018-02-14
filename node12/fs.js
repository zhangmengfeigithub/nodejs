const fs=require('fs')
fs.rename('a.txt','b.txt',function(err,data){
    console.log(err)
})