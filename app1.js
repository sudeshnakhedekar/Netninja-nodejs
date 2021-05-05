const express = require('express');

//express app
 const app = express();

  //listing to request
  app.listen(3000);

  app.get('/' ,(request, response) =>{
    //   response.send('<p>Home Page</p>')

    //html file to route
    response.sendFile('./views/index.html',{root : __dirname});
  });

  app.get('/about' ,(request, response) =>{
    // response.send('<p>About Page</p>')
    response.sendFile('./views/about.html',{root : __dirname});
});

//redirect
app.get('/about-us' ,(request, response) =>{
  response.redirect('./about');
});

//404 file
app.use((request, response) =>{

  response.status(404).sendFile('./views/404.html',{root : __dirname});
});




