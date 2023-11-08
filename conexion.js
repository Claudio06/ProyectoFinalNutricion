const mongoose = require('mongoose');
const env = require('dotenv');
env.config();


const mongoLocal = process.env.MONGO_LOCAL;
const mongoAtlas = process.env.MONGO_ATLAS;

const conexion = mongoose.connect(mongoAtlas).then(
    () => { 
        console.log('Conectado a la base de datos');
    },
    err => { 
        console.log(`No tenemos conexión por ${err.message}`);
    }
)

module.exports = conexion; 