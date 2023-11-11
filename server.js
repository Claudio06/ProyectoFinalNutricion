const mongoose = require('mongoose');
const env = require('dotenv');

const app = require('./app.js');

const PORT = process.env.PORT || 3001;

//Levantamos la conexión a la base de datos
require('./conexion.js');

//Levantamos el servidor
const server = app.listen(PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running on port http://localhost:${PORT}`);
  });


    module.exports = server;