const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const customerController = require('../controllers/customerControlers')

// Cargar
router.get('/', customerController.index);
router.get('/ingresar', customerController.ingresar);
router.get('/registrarse', customerController.registrarse);
router.get('/recuperar', customerController.recuperar);
router.get('/administrador', customerController.administrador);
router.get('/ubicacion', customerController.ubicacion);
router.get('/sugerencias', customerController.sugerencias);
router.get('/atencion', customerController.atencion);
router.get('/perfil', customerController.perfil);
router.get('/carrito', customerController.carrito);

// Añadir
router.post('/aniadirUsuario/:id', customerController.aniadirUsuario);
router.post('/aniadirAdministrador', customerController.aniadirAdministrador);
router.post('/aniadirCarro', customerController.aniadirCarro);
router.post('/aniadirProducto', customerController.aniadirProducto);
router.post('/aniadirRelacion', customerController.aniadirRelacion);

//Eliminar
router.get('/eliminarUsuario/:id', customerController.eliminarUsuario);
router.get('/eliminarCarro/:id', customerController.eliminarCarro);
router.get('/eliminarProducto/:id', customerController.eliminarProducto);
router.get('/eliminarRelacion/:id', customerController.eliminarRelacion);

//Editar
router.post('/editarUsuario/:id', customerController.editarUsuario);
router.post('/editarUsuario2/:id', customerController.editarUsuario2);
router.post('/editarCarro/:id', customerController.editarCarro);
router.post('/editarProducto/:id', customerController.editarProducto);
router.post('/editarRelacion/:id', customerController.editarRelacion);

//Usuario
router.post('/iniciarSesion', customerController.iniciarSesion);
router.get('/cerrarSesion', customerController.cerrarSesion);

//Carrito
router.post('/agregarCarrito/:id', customerController.agregarCarrito);
router.get('/eliminarCarrito/:id', customerController.eliminarCarrito);
router.get('/comprarCarrito', customerController.comprarCarrito);

//Archivos
router.post('/agregarSugerencia', customerController.agregarSugerencia);
router.post('/agregarAtencion', customerController.agregarAtencion);


module.exports = router;