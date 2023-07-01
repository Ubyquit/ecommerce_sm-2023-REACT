const express = require('express');
const router = express.Router();
const administradoresController = require('../controllers/administradoresController');

// Obtener todos los administradores
router.get('/', administradoresController.obtenerAdministradores);

// Obtener un administrador por su ID
router.get('/:id', administradoresController.obtenerAdministradorPorId);

// Crear un nuevo administrador
router.post('/', administradoresController.crearAdministrador);

// Actualizar un administrador existente
router.put('/:id', administradoresController.actualizarAdministrador);

// Eliminar un administrador
router.delete('/:id', administradoresController.eliminarAdministrador);

// Ruta POST para autenticar un administrador
router.post('/login', administradoresController.login);

module.exports = router;
