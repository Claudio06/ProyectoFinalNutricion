const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app.js');

dotenv.config();
const PORT = 3000

// process.env.PORT || 9000;

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