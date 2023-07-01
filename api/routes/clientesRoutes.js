const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Crear un nuevo cliente
router.post('/', clientesController.crearCliente); 
// Obtener todos los clientes
router.get('/', clientesController.obtenerClientes); 
// Obtener un cliente por su ID
router.get('/:id', clientesController.obtenerClientePorId); 
// Actualizar un cliente existente
router.put('/:id', clientesController.actualizarCliente); 
// Eliminar un cliente
router.delete('/:id', clientesController.eliminarCliente); 
// Ruta para el login de clientes
router.post('/login', clientesController.login);

module.exports = router;
