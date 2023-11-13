const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');  

const {
   getArticulo,
   getagregar,
   getbuscaractualizar,
agregaraArticulo,
buscaractualizar,
actualizarArticulo,
// actualizado,
 eliminarArticulo } =  require('../controllers/articuloControllers.js');

router.get('/mostrar', getArticulo);
router.get('/agregar' , getagregar);
router.post('/agregar',[
    check('titulo').isLength({min: 4}),
    check('descripcion').isLength({min: 8}),
    check('precio').not().isEmpty(),
], agregaraArticulo);

// router.get('/actualizar', getbuscaractualizar);
router.get('./actualizar', actualizarArticulo);
//probando
 router.get('/actualizar/', buscaractualizar);

router.post('/actualizar/:_id', buscaractualizar);
 router.post('/actualizar/', actualizarArticulo);
router.post('/actualizar/:id', eliminarArticulo);
router.get('/eliminar/:_id', eliminarArticulo);
router.get('/eliminar/', eliminarArticulo);
router.delete('/eliminar/:_id', eliminarArticulo);
router.post('/eliminar/:_id', eliminarArticulo);

module.exports = router;
