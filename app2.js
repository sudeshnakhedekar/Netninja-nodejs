const express = require('express');

//express app
 const app = express();

 //register view engine
 app.set('view engine','ejs');



  //listen for request
  app.listen(3000);

  app.get('/' ,(request, response) =>{
   response.render('index')
  });

  app.get('/about' ,(request, response) =>{
    // response.send('<p>About Page</p>')
    response.render('about')
});

app.get('/blogs/create',(request, response) =>{
    response.render('create')
})

//404 file
app.use((request, response) =>{

  response.status(404).render('404')
});

