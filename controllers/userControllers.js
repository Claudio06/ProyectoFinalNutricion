const express  =  require ( 'express' ) ;  
const bcrypt = require('bcrypt');

const {validationResult} = require('express-validator');
// const userSchema = require('../model/userSchema.js');
const path = require('path');
const registroSchema = require('../model/registroSchema.js');
// const User = require('../model/userSchema.js');
// const { generarToken , authToken } = require('../middleware/jwt.js');






const getUser = async (req, res) => {
    
    res.render('login');

}
const Login = async (req, res) => {
    
    const { nombre , password}  = req.body ;
    
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.json({
            data: 'Errores en los datos'
        });
        }
     
try
       { 
        
        const usuario = await registroSchema.findOne({ nombre });
    
            console.log(`B. Usuario: ${usuario}`);
    
            if(!usuario){
                return res.json( {
                    data: 'El Email no existe'
                });
            }
    
            const passwrdcorrecto = bcrypt.compareSync(password, usuario.password);
            
            if(!passwrdcorrecto){
              return   res.status(500).json({
                    data: 'Password incorrecto'

                })

            } 
            
        else{
//  return res.status(200).json({

//     data: 'Login correcto'
//  });

return res.render('logueado' ,{ style :'public\css\index.css'});

            }
} catch (error) {
        return res.status(500).json({
            data: 'Error interno del servidor'
        }); 
}

     
}
const getRegistro = async (req, res) => {
res.render('registro' , {
    title: 'Registro'

});


}
const registro = async (req, res) => {
     const errores = validationResult(req)
const { nombre , email , password}  = req.body ;
console.log(errores);
 if (!errores.isEmpty()) {
        return res.json({
            data: 'Errores en los datos'
        });
    }

try {
// Verificar si el email

let usuario = await registroSchema.findOne({ email });

        console.log(`2. Usuario: ${usuario} - ${email}`);

        if(usuario){
            return res.json({
                data: 'El Email ya existe'
            });
        }
usuario = new registroSchema(req.body);
// Hashear el password
const salt =  bcrypt.genSaltSync(10);
console.log(salt);
console.log(usuario.nombre);

usuario.password =  bcrypt.hashSync(password, salt);
await usuario.save();

// return res.json({
//     data: 'Usuario creado correctamente'
// });
// return res.sendfile(path.join(__dirname + './login.html'));

return res.render('./login');
}
catch (error) {
    return res.status(500).json({
        data: 'Error interno del servidor'
    });
}

}

const getAdmin = async (req, res) => {

}
const postAdmin = async (req, res) => {
    const { nombre , password}  = req.body ;
    // const errores = validationResult(req)

    // if (!errores.isEmpty()) {
    //     return res.json({
    //         data: 'Errores en los datos'
    //     });
    //     }
     

       try
       { 
        
        const usuario = await registroSchema.findOne({ nombre });
    
            console.log(`B. Usuario: ${usuario}`);
    
            if(!usuario){
                return res.json( {
                    data: 'El Email no existe'
                });
            }
    
            const passwrdcorrecto = bcrypt.compareSync(password, usuario.password);
            
            if(!passwrdcorrecto){
                
                return   res.status(500).json({
                    data: 'Password incorrecto'
                    
                })
                //  return res.status(200).json({
                    
                    //     data: 'Login correcto'
                    //  });
                    
                    
                }
                if(usuario.nombre == "administrador" && usuario.password === "12345678" ){
                     return res.status(200).json({
             
                         data: 'te logueste como admin'
                      });
                  }
                  else{
                    res.status(500).json({
                       data: 'No eres admin'
                   });
                 }  
                // return res.render('mostrar');
                res.status(200).send('estas loguaado como admin')
        }
        
        catch (error) {
            return res.status(500).json({
            data: 'Error interno del servidor'
        }); 
}  
    
}

module.exports = { getRegistro, registro , getUser , Login , getAdmin , postAdmin}