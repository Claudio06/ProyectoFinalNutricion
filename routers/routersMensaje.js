const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');  

const {
    getMensaje, 
    enviarMensaje 
} =  require('../controllers/mensajeControllers.js');

router.get('/', getMensaje);

router.post('/mensaje',[
    check('nombre').isLength({min: 4}),
    check('email').isEmail(),
    check('mensaje').isLength({min: 8}),
], enviarMensaje);


module.exports = router;

