const http=require('http');
const querystring=require('querystring')
http.createServer(function (req, res){
  var GET={}; 
  if(req.url.indexOf('?')!=-1){
    var arr=req.url.split('?');
    //arr[0]=>地址  '/aaa'
    var url=arr[0];
    //arr[1]=>数据  'user=blue&pass=123456'
   GET = querystring.parse(arr[1])
  }else{
    var url=req.url;
  }


  console.log(url, GET);

  //req获取前台请求数据
  res.write('aaa');
  res.end();
}).listen(8082);
