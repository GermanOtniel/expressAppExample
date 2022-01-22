const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.send('Mi respuesta express');
});

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname + "/public/paginas/inicio.html");
});

app.get('/iniciarSesion', (req, res) => {
  res.sendFile(__dirname + "/public/paginas/iniciarSesion.html");
});

app.get('/perfil', (req, res) => {
  res.sendFile(__dirname + "/public/paginas/perfil.html");
});

app.post('/enviarEmail', (request, response) => {
  response.json({
    error: false,
    message: 'HOLA MI NIÑA!',
  });
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log('Servidor en el puerto', port);
});