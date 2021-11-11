const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();


/* Express */
app.use(express.static('public'));
app.set('port', process.env.PORT);

/* Handlebars */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
/*
app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Pagina hbs',
    nombre: 'Victor Hugo',
    anuncio: "La vida es un viaje"
  });
});

app.get('/hiworld', (req, res) => {
  res.sendFile(__dirname + '/public/helloWorld.html')
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    titulo: 'Pagina hbs',
    nombre: 'Victor Hugo',
    anuncio: "La vida es un viaje"
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    titulo: 'Pagina hbs',
    nombre: 'Victor Hugo',
    anuncio: "La vida es un viaje"
  })
});
*/

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(app.get('port'), () => {
  console.log(`La app esta escuchando con por `, app.get('port'));
});