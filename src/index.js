const express = require('express');
const ejs = require('ejs');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const session = require('express-session');
const myConnection = require('express-myconnection');
const consultas = require('./mysql_conector');
const app = express();

// Importando rutas
const customerRoutes = require('./routes/customer');
const urlencoded = require('body-parser/lib/types/urlencoded');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'jesus',
    password: 'jesus123',
    port: 3306,
    database: 'autoforce',
    multipleStatements: true
}, 'single'))
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Routes

app.use('/', customerRoutes);


//Configuración de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log("Aplicacion corriendo en el puerto 3000");
})