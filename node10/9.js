const jade=require('jade');

console.log(jade.renderFile('./views/9.jade', {pretty: true,
arr:['aaa','bbb','ccc']}));
