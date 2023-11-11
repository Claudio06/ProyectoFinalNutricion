const express = require('express');
const router = express.Router();
const{ check } = require('express-validator');  

const {
   getArticulo,
   getagregar,
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
router.get('/actualizar/:_id', actualizarArticulo);

router.post('/actualizar/:_id', buscaractualizar);
 router.post('/actualizar/', actualizarArticulo);
//  router.post(/actualizar/, actualizado)
router.delete('/eliminar/:_id', eliminarArticulo);

module.exports = router;
