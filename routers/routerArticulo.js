const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');  

const {
   getArticulo,
agregaraArticulo,
actualizarArticulo  } =  require('../controllers/articuloControllers.js');

router.get('/mostrar', getArticulo);

router.post('/agregar',[
    check('titulo').isLength({min: 4}),
    check('descripcion').isLength({min: 8}),
    check('precio').not().isEmpty(),
], agregaraArticulo);

router.patch('/actualizar/:_id', actualizarArticulo);

module.exports = router;
