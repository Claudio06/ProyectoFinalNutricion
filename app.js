const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const path = require('path');
const dotenv = require('dotenv');
// dotenv.config();
const  morgan = require('morgan');
const  cors = require('cors');
// const publicacionSchema = require('./model/publicacionSchema.js');
const app = express();
// const PORT = process.env.PORT || 9000;
// app.use(express.static('public'));
const validar = require('./middleware/validar.js');
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 app.use(express.static(path.join(__dirname, 'public')));
 
 



// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'public', 'nav.html'));
//     res.render('index');
// });
app.use('/cliente', require('./routers/routersMensaje.js'));
app.use('/registro', require('./routers/routerUser.js'));
app.use('/user', require('./routers/routerUser.js'));
app.use('/contacto', require('./routers/routersMensaje.js'));
app.use('/login' , require('./routers/routerUser.js'));
app.use('/',  require('./routers/routerArticulo.js'));
//  app.use('/articulo/', require('./routers/routerArticulo.js'));
// app.use('/registro', require('./routers/routerUser.js'));
//  app.get('/index', (req, res) => {
// app.use('/admin', require('./routers/routerUser.js'))


//  });

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {

       res.render('login' , { layout: 'login' });
})

app.get('/registro', (req, res) => {
    res.render('registro', { layout: 'registro' });
})
app.get('/sobremi', (req, res) => {
    res.render('sobremi' , { layout: 'sobremi' });
})

app.get('/articulo', (req, res) => {
    res.render('articulo' , { layout: 'articulo' });
});
 app.get('/mostrar', (req, res) => {
    res.render('mostrar' , { layout: 'mostrar' });
 })
 app.get('/agregar', (req, res) => {
    res.render('agregar' , { layout: 'agregar' });
})
app.get('/actualizar', (req, res) => {
    res.render('articuloactualizado' , { layout: 'articuloactualizado' });
})
app.get('/eliminar', (req, res) => {
    res.render('eliminar' , { layout: 'eliminar' });
})
// app.get('/actualizar', (req, res) => {
//     res.render('actualizar' , { layout: 'actualizar' });
// })
module.exports = app;




