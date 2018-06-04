const http = require("http");
let q = require("./quotes");
console.log(q.qs(0));

http.createServer(onRequest).listen(1991);

function onRequest(request, response){
    response.write("Hello World");
    response.write(q.qs(0));
    response.end();
}

