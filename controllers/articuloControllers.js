const express  =  require ( 'express' ) ;  
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const articuloSchema = require('../model/articuloSchema.js');



const getArticulo = async (req, res) => {
   const {titulo, descripcion, precio} = req.body;
    const articulo = await articuloSchema.find({});
    res.status(200).json({
        articulo
    })
}

const agregaraArticulo = async (req, res) => {
    
        const {titulo, descripcion , precio} = req.body;
        const errores = validationResult(req);
         if (!errores.isEmpty()) {
                return res.json({
                    data: 'Debe Completar los datos'
                });
            }
        
            const articulo = await articuloSchema.findOne({titulo}).exec()
        // const user = db_personas.find((user) => user.guid === guid);
          
        if (articulo) {
            res.status(404).send("El articulo ya se encuentra disponible");
          }
            const newarticulo = await new articuloSchema({
            titulo: titulo,
            descripcion: descripcion,
            precio: precio
            });
            
        
            await newarticulo.save();
            res.status(200).json({data: newarticulo});
            // res.render('/publicacion', { newpublicacion});
        }

        const actualizarArticulo = async (req, res) => {
    const { id } = req.params;
    const  dato  = req.body;
    const articulo =  await articuloSchema.findById(id).exec();

    const actualizar = await Publicacion.findByIdAndUpdate(id, dato, {new: true});
await actualizar.save();
console.log({data: actualizar});
// return res.render('actualizar' , {actualizar:actualizar,
// layout: 'actualizar' })


};
            
             


        
        module.exports = {
            getArticulo,
            agregaraArticulo,
            actualizarArticulo,

}