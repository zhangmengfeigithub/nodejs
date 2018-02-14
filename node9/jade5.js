const jade=require('jade');
const fs=require('fs')
var str = jade.renderFile('./views/4.jade', {pretty: true});
console.log(str)




