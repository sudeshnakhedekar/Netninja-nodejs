const hhtp = require('http');

//creates a server
const server = hhtp.createServer((request , response) =>{
 console.log('request made..');
});

//listening to port 3000 on localhost
server.listen(3000, 'localhost' , ()=>{
    console.log('Listening for request on port 3000');
});



