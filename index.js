var http = require("http");
const port = 8000;

http.createServer(function(reg, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("bye World!");
}).listen(port,function(){
    console.log('Node sever is running on port $ {port}...');
});

