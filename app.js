  const express = require('express');

 //express app
  const app = express();

   //listing to request
   app.listen(3000);

   app.get('/' ,(request, response) =>{
       response.send('<p>Home Page</p>')
   });

