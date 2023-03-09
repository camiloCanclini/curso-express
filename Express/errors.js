const express = require('express');

const app = express();

app.get('/usuario/:id', function(req, res, next) {
    var id = req.params.id;
    if (isNaN(id)) {
      var err = new Error('No ID provided');
      err.status = 400;
      return next(err);
    }
    res.send('hola')
  });
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
  });
app.listen(3000,()=>{
    console.log('La aplicación esta escuchando en el puerto: 3000');
});