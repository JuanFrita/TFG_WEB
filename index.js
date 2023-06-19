const express = require('express');
const rateLimit = require('express-rate-limit');
const router = require('./routes/routes');
const path = require('path');

const app = express();

//rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutos
    max: 1000,
});
app.use(limiter);

//montar app con router
app.use('/', router);

//configurar ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//assets en carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//iniciar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Node app escuchando en http://localhost:${port}/index`);
});