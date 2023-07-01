const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

// Obtener todas las categorías
router.get('/', categoriasController.obtenerCategorias);

// Obtener una categoría por su ID
router.get('/:id', categoriasController.obtenerCategoriaPorId);

// Crear una nueva categoría
router.post('/', categoriasController.crearCategoria);

// Actualizar una categoría existente
router.put('/:id', categoriasController.actualizarCategoria);

// Eliminar una categoría
router.delete('/:id', categoriasController.eliminarCategoria);

module.exports = router;
