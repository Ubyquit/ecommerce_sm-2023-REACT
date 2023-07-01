const express = require('express');
const router = express.Router();
const productosCategoriasController = require('../controllers/productosCategoriasController');

// Obtener todas las relaciones productos-categorias
router.get('/', productosCategoriasController.obtenerProductosCategorias);

// Obtener la relación producto-categoria por su ID
router.get('/:id', productosCategoriasController.obtenerProductoCategoriaPorId);

// Crear una nueva relación producto-categoria
router.post('/', productosCategoriasController.crearProductoCategoria);

// Actualizar una relación producto-categoria existente
router.put('/:id', productosCategoriasController.actualizarProductoCategoria);

// Eliminar una relación producto-categoria
router.delete('/:id', productosCategoriasController.eliminarProductoCategoria);

module.exports = router;
