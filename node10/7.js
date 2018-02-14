const jade=require('jade');

console.log(jade.renderFile('./views/7.jade', {pretty: true,
  arr: ['aaa', 'sfasdf', '3423', 'asdfasdf']
}));
