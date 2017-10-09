const express = require('express');
const hbs  = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) =>{
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear()
});

app.get('/', (req,res) => {
   //res.send('<h1>Hello, How are you ?</h1>');
   res.render('about.hbs',{
     pageTitle: 'Home Page'
     });
});

app.get('/about',(req,res) =>{
  res.render('about.hbs',{
    pageTitle: 'About Page'

  });
});

app.listen(3000);