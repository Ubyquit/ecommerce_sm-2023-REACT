const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
const categoriasRoutes = require('./routes/categoriasRoutes');
const productosRoutes = require('./routes/productosRoutes');
const productosCategoriasRoutes = require('./routes/productosCategoriasRoutes');
const administradoresRoutes = require('./routes/administradoresRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

app.use('/api/categorias', categoriasRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/productosCategoriasRoutes', productosCategoriasRoutes);
app.use('/api/administradores', administradoresRoutes);
app.use('/api/clientes', clientesRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
