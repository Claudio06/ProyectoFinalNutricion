const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');
const bcrypt = require('bcrypt');

const{
    getRegistro,
    registro,
   getUser,
    Login
} = require('../controllers/userControllers.js');


router.get('/login' , getUser);
// router.get('/register' , getRegistro);    
router.get('/registro', getRegistro); 

router.post('/register', [
 check('nombre', 'El nombre es obligatorio').not().isEmpty(),
 check('email', 'El email es obligatorio').isEmail(),
 check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6})  
] , registro)

router.post('/login', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6})
] , Login)








module.exports = router;