const express = require('express');

const app = express();

app.set('views', './templates'); // Indicamos la carpeta que guarda las plantillas
app.set('view engine', 'ejs'); // Indicamos el motor de plantillas, con su con

app.get('/', function(req, res) {
    res.render('index', { title: 'Mi sitio web', message: '¡Hola mundo!' });
});

app.listen(3000,()=>{
    console.log('La aplicación esta escuchando en el puerto: 3000');
});