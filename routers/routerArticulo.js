const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');  

const {
   getArticulo,
agregaraArticulo,
actualizarArticulo,
 eliminarArticulo } =  require('../controllers/articuloControllers.js');

router.get('/mostrar', getArticulo);
router.get('agregar' , agregaraArticulo);
router.post('/agregar',[
    check('titulo').isLength({min: 4}),
    check('descripcion').isLength({min: 8}),
    check('precio').not().isEmpty(),
], agregaraArticulo);

router.patch('/actualizar/:_id', actualizarArticulo);
router.delete('/eliminar/:_id', eliminarArticulo);

module.exports = router;
