const mongoose = require('mongoose');

const Usuario = require('../model/registroSchema.js');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const validar = async (req, res , next) => {
const id = req.params._id
    const { nombre, password } = req.body;
    
    const usuario = await Usuario.findOne({nombre});
    console.log(usuario)
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            data: 'Errores en los datos'
        });
    }
    try{
        const passwrdcorrecto = bcrypt.compareSync(password, usuario.password);
        if(!passwrdcorrecto){
            return res.status(500).json({
                data: 'Password incorrecto'
            })
        }
      
     if(usuario.nombre === "admin"){
         return res.status(200).json({
             data: 'estas logueado como administrador'
         })
        }
          else{
             return res.status(500).json({ data:"No eras admin, no puedes realizar modifiaciones"
         })
     }
    }
         catch(error){
       console.log(error)
   }
   next;
}
module.exports = validar;