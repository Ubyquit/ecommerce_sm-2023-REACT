const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Ruta GET para obtener todos los productos
router.get('/', productosController.obtenerProductos);

// Ruta GET para obtener un producto por su ID
router.get('/:id', productosController.obtenerProductoPorId);

// Ruta POST para crear un nuevo producto
router.post('/', productosController.crearProducto);

// Ruta PUT para actualizar un producto existente
router.put('/:id', productosController.actualizarProducto);

// Ruta DELETE para eliminar un producto
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
