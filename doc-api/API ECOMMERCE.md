##### Instalación de dependencias

   ```bash
   npm init -y
   ```

   Esto creará un archivo `package.json` que contendrá la configuración básica del proyecto.

3. Instalación de las dependencias: Instala las dependencias necesarias ejecutando los siguientes comandos en tu terminal:

   ```bash
   npm install express mysql2 cors
   ```


   - En la carpeta `controllers`, crearás los controladores para manejar las solicitudes y respuestas de la API.
   - En la carpeta `routes`, definirás las rutas de la API.
   - En el archivo `db.js`, configurarás la conexión a la base de datos MySQL.
   - En el archivo `index.js`, crearás la instancia de Express y configurarás las rutas y middleware.
   
##### Estructura del proyecto ecommerce.

```js
proyecto-api/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── administradoresController.js
│   │   ├── categoriasController.js
│   │   ├── clientesController.js
│   │   ├── productosCategoriasController.js
│   │   └── productosController.js
│   ├── routes/
│   │   ├── administradoresRoutes.js
│   │   ├── categoriasRoutes.js
│   │   ├── clientesRoutes.js
│   │   ├── productosCategoriasRoutes.js
│   │   └── productosRoutes.js
│   ├── db.js
│   └── index.js
└── package.json
```




`index.js`
```js
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
```

`db.js`

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'ecommerce_sm34'
});

module.exports = connection;
```
