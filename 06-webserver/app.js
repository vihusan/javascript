const express = require('express');
const morgan = require('morgan');
const multer = require ( 'multer' );
const app = express();

app.set('port', 38900);

// Middleware Zone

//Servir medios estaticos mediate un middleware
app.use( express.static('public'));
app.use( morgan() );
app.use( multer() );

app.get('/hiworld', (req, res) => {
  res.send("Hola mundo");
});

app.get('*', (req, res) => {
  res.send("404 | Page not found !");
});

app.listen( app.get('port') , () => {
  console.log(`La app esta escuchando con por `, app.get('port'));
});