
1. Tabla `categorias`:

   ```sql
   INSERT INTO categorias (nombre) VALUES
   ('Hombre'),
   ('Mujer'),
   ('Niño');
   ```

2. Tabla `productos`:

   ```sql
   INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES
   ('Camiseta', 'Camiseta de algodón para hombre', 19.99, 'camiseta_hombre.jpg'),
   ('Pantalón', 'Pantalón de mezclilla para hombre', 39.99, 'pantalon_hombre.jpg'),
   ('Vestido', 'Vestido elegante para mujer', 49.99, 'vestido_mujer.jpg'),
   ('Zapatos', 'Zapatos de cuero para hombre', 59.99, 'zapatos_hombre.jpg'),
   ('Blusa', 'Blusa de seda para mujer', 29.99, 'blusa_mujer.jpg'),
   ('Shorts', 'Shorts deportivos para mujer', 24.99, 'shorts_mujer.jpg'),
   ('Zapatillas', 'Zapatillas deportivas para niño', 34.99, 'zapatillas_niño.jpg'),
   ('Pijama', 'Pijama de algodón para niño', 19.99, 'pijama_niño.jpg'),
   ('Chaqueta', 'Chaqueta impermeable para hombre', 69.99, 'chaqueta_hombre.jpg'),
   ('Falda', 'Falda de cuero para mujer', 39.99, 'falda_mujer.jpg');
   ```

3. Tabla `productos_categorias` (relaciones entre productos y categorías):

   ```sql
   INSERT INTO productos_categorias (id_producto, id_categoria) VALUES
   (1, 1),   -- Camiseta (Hombre)
   (2, 1),   -- Pantalón (Hombre)
   (3, 2),   -- Vestido (Mujer)
   (4, 1),   -- Zapatos (Hombre)
   (5, 2),   -- Blusa (Mujer)
   (6, 2),   -- Shorts (Mujer)
   (7, 3),   -- Zapatillas (Niño)
   (8, 3),   -- Pijama (Niño)
   (9, 1),   -- Chaqueta (Hombre)
   (10, 2);  -- Falda (Mujer)
   ```