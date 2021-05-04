const hhtp = require('http');
const fs = require('fs');
//creates a server
const server = hhtp.createServer((request , response) =>{
 console.log(request.url, request.method);

 response.setHeader('Content-Type' ,'text/html')
//routing url concept
 let path ='./views/';
 switch(request.url){
     case '/':
         path +='index.html';
        response.statusCode =200;
         break;
     case '/about':
         path +='about.html';
         response.statusCode =200;
         break;
     default:
        response.statusCode =404;
         path +='404.html';
 }



//send as html file to browser
fs.readFile(path ,(error, data) =>{
    if(error){
console.log(error);
response.end();
    }else{
        // response.write(data);
        response.end(data);
    }
})


});

//listening to port 3000 on localhost
server.listen(3000, 'localhost' , ()=>{
    console.log('Listening for request made on port 3000');
}); 



