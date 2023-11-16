const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');
const bcrypt = require('bcrypt');

const{
    getRegistro,
    registro,
   getUser,
    Login,
    postAdmin
    // postLogin,
} = require('../controllers/userControllers.js');

const validar = require('../middleware/validar.js');
router.get('/login' , getUser);
// router.get('/register' , getRegistro);    
router.get('/registro', getRegistro); 

router.post('/', [
 check('nombre', 'El nombre es obligatorio').not().isEmpty(),
 check('email', 'El email es obligatorio').isEmail(),
 check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6})  
] , registro)
router.post('/register', getUser)
router.post('/login', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6})
] , Login)

router.post('/verificar' ,
[ 
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6})

    ]
    , validar );





module.exports = router;