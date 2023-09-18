const { log } = require('console');
const http = require('http');

const server = http.createServer(function listener(request, response) {
    console.log('started');
    
    
    console.log(request);
    console.log('http server requested');
    console.log(response);
    console.log('http server responded');
   console.log('ended');

})

server.listen(3000, function run() {
    console.log("server started");
})