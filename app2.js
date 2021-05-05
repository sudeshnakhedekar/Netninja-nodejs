//Concept of EJS

const express = require('express');

//express app
 const app = express();

 //register view engine
 app.set('view engine','ejs');



  //listen for requests
  app.listen(3000);

  app.get('/' ,(request, response) =>{
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem inpsum dolor sit amet consectrtur'},
      {title: 'Mario finds stars', snippet: 'Lorem inpsum dolor sit amet consectrtur'},
      {title: 'How to defeat bowser', snippet: 'Lorem inpsum dolor sit amet consectrtur'},
  ];
   response.render('index',{title :'Home',blogs})
  });

  app.get('/about' ,(request, response) =>{
    // response.send('<p>About Page</p>')
    response.render('about' ,{title :'About'})
});

app.get('/blogs/create',(request, response) =>{
    response.render('create' ,{title :'Create a new Blog'})
})

//404 file
app.use((request, response) =>{

  response.status(404).render('404' ,{title :'404'})
});

