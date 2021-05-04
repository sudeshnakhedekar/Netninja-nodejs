const hhtp = require('http');


//creates a server
const server = hhtp.createServer((request , response) =>{
 console.log('request made');
});

//listening to port 3000 on localhost
server.listen(3000, 'localhost' , ()=>{
    console.log('listening fo request on port 3000');
});

//lsend request to browser
