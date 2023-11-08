const express  =  require ( 'express' ) ;  
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const mensajeSchema = require('../model/mensajeSchema.js');

const getMensaje = async (req, res) => {

}
const enviarMensaje = async (req, res) => {
    const errores = validationResult(req)

    const { nombre , email , mensaje}  = req.body ;

    console.log(errores);
    if (!errores.isEmpty()) {
        return res.json({
            data: 'Errores en los datos'
        });
    }
try{
  const email =  mensajeSchema.findOne({email})   ;
console.log(email);
if(email){
    return res.status(401).json({
        data : 'El mail ingresado ya existe' 
    })
}
} catch (error){



}
console.log(email);
const nuevoMensaje = new mensajeSchema({
    nombre: nombre,
    email: email,
    mensaje: mensaje
});
res.status(200).end('Datos ingresados correctamente');
await nuevoMensaje.save();
}
module.exports = {
    getMensaje,
    enviarMensaje
}