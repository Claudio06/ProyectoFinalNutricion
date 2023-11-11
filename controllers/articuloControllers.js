const express  =  require ( 'express' ) ;  
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const articuloSchema = require('../model/articuloSchema.js');



const getArticulo = async (req, res) => {
   const {titulo, descripcion, precio} = req.body;
    const articulo = await articuloSchema.find({});
    
    return res.render('mostrar' , {articulo })
    // res.status(200).json({
    //     articulo
    // })
}
const getagregar = async (req, res) => {
 return res.render('agregar' , { layout: 'agregar' });
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

      
    if (articulo) {
        res.status(404).send("El articulo ya se encuentra disponible");
      }
        const newarticulo = await new articuloSchema({
        titulo: titulo,
        descripcion: descripcion,
        precio: precio
        });
        
    
        await newarticulo.save();
        // res.status(200).json({data: newarticulo});
       return res.render('mostrar' ,  {newarticulo })







    
//         const {titulo, descripcion , precio} = req.body;
//         const errores = validationResult(req);
//          if (!errores.isEmpty()) {
//                 return res.json({
//                     data: 'Debe Completar los datos'
//                 });
//             }
        
//             const articulo =  await articuloSchema.findOne({titulo}).exec()
    
          
//         if (articulo) {
//             res.status(404).send("El articulo ya se encuentra disponible");
//           }
//             const newarticulo =  new articuloSchema({
//             titulo: titulo,
//             descripcion: descripcion,
//             precio: precio
//             });
            
        
//             await newarticulo.save();
//         // res.status(200).json({data: newarticulo});
//      res.render('agregar' , { newarticulo : newarticulo , layout: 'agregar'})

        
//         // return res.render('mostrar')
      }

      const buscaractualizar = async (req, res) => {
         const { id } = req.params;

         actualizar = await articuloSchema.findById(id).exec();

        
      
      return res.render('articuloactualizado', {
        actualizar,
        id
      })
    

      }

      
    const actualizarArticulo = async (req, res) => {
    const { id } = req.params;
    const  dato  = req.body;
    const articulo =  await articuloSchema.findById(id).exec();

  const actualizar = await articuloSchema.updateOne(articulo ,dato);
console.log({data: actualizar});
 return res.render('actualizar' , {actualizar});

//  res.status(200).json({data: 'producto actualizado correctamente' });
}
//   const actualizado = async (req, res) => {
//   return res.render('mostrar');
// }
            
           
const eliminarArticulo = async (req, res) => {
 const { id } = req.params;
    const articulo = await articuloSchema.findById(id).exec();
    // if(!articulo){
    //     return res.status(404).send("El articulo no existe");
    // }
    console.log(articulo._id);
    await articuloSchema.deleteOne(articulo);

    res.status(200).json({data: 'producto eliminado correctamente' });

}


        
        module.exports = {
            getArticulo,
            
            getagregar,
            agregaraArticulo,
            buscaractualizar,
            actualizarArticulo,
            // actualizado,
            eliminarArticulo

}