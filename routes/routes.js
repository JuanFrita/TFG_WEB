const express = require('express');
const router = express.Router();

//middleware modelos
router.use('/predict/*', (req, res, next) => {
    next();
});

//handlers
router.get('/index', (req, res) => {
    res.render('home');
});

router.post('/predict/bayesian', (req, res) => {
    res.send('TO DO conexion con el modelo bayesian');
});

router.post('/predict/p2p', (req, res) => {
    res.send('TO DO conexion con el modelo p2p');
});

//exportar el router
module.exports = router;