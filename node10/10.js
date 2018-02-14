const jade=require('jade');

console.log(jade.renderFile('./views/10.jade', {pretty: true,
content:'<h1>你好呀</h1><p>小伙子</p>'}));
