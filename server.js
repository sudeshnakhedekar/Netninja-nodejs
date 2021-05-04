const hhtp = require('http');

//creates a server
const server = hhtp.createServer((request , response) =>{
 console.log(request.url, request.method);

 response.setHeader('Content-Type' ,'text/html')

  response.write('<head><link rel="stylesheet" href="#"></head>')
 response.write('<p>hello ninjas</p>');
 response.write('<p>hello again ninjas</p>');
 response.end();
});

//listening to port 3000 on localhost
server.listen(3000, 'localhost' , ()=>{
    console.log('Listening for request you made on port 3000');
}); 



