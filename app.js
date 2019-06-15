var http=require('http')
var url = require('url')

var server = http.createServer(function(req,res) {

    var urlObj = url.parse(req.url)

    res.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});//纯文本

    res.write("您好 nodejs" )

    res.end()
})

server.listen(8000,()=>{
    console.log(server.address().address+":"+server.address().port);
});