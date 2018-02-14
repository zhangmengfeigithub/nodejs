const http = require('http')
var server = http.createServer(function(req,res){
    switch(req.url){
        case '/1.html':
        res.write('aaa')
        break;
        case '/2.html':
        res.write('bbb')
        break;
        case '/3.html':
        res.write('ccc')
        break;
        default:
        res.write('404')
        break;
    }
    res.end()
})
server.listen(8081)
