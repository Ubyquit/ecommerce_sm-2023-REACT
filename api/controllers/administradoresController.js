const db = require("../db");
const bcrypt = require("bcrypt");

const obtenerAdministradores = (req, res) => {
  db.query("SELECT * FROM administradores", (error, resultados) => {
    if (error) {
      res
        .status(500)
        .json({ error: "Ocurrió un error al obtener los administradores" });
    } else {
      res.json(resultados);
    }
  });
};

const obtenerAdministradorPorId = (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM administradores WHERE id_administrador = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al obtener el administrador" });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: "El administrador no fue encontrado" });
      } else {
        res.json(resultados[0]);
      }
    }
  );
};

const crearAdministrador = (req, res) => {
  const { nombre, email, contrasena } = req.body;
  const hashedPassword = bcrypt.hashSync(contrasena, 10);

  db.query(
    "INSERT INTO administradores (nombre, email, contrasena) VALUES (?, ?, ?)",
    [nombre, email, hashedPassword],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al crear el administrador" });
      } else {
        res.status(201).json({ mensaje: "Administrador creado exitosamente" });
      }
    }
  );
};

const actualizarAdministrador = (req, res) => {
  const id = req.params.id;
  const { nombre, email, contrasena } = req.body;
  const hashedPassword = bcrypt.hashSync(contrasena, 10);

  db.query(
    "UPDATE administradores SET nombre = ?, email = ?, contrasena = ? WHERE id_administrador = ?",
    [nombre, email, hashedPassword, id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al actualizar el administrador" });
      } else {
        res.json({ mensaje: "Administrador actualizado exitosamente" });
      }
    }
  );
};

const eliminarAdministrador = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM administradores WHERE id_administrador = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al eliminar el administrador" });
      } else {
        res.json({ mensaje: "Administrador eliminado exitosamente" });
      }
    }
  );
};

const login = (req, res) => {
  const { email, contrasena } = req.body;

  db.query(
    "SELECT * FROM administradores WHERE email = ?",
    [email],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Ocurrió un error al iniciar sesión" });
      } else if (resultados.length === 0) {
        res.status(401).json({ error: "Credenciales inválidas" });
      } else {
        const administrador = resultados[0];
        const contrasenaValida = bcrypt.compareSync(
          contrasena,
          administrador.contrasena
        );

        if (contrasenaValida) {
          // La contraseña es válida, se puede permitir el acceso
          // Aquí se puede generar un token de autenticación, establecer una sesión, etc.
          res.json({ mensaje: "Inicio de sesión exitoso" });
        } else {
          res.status(401).json({ error: "Credenciales inválidas" });
        }
      }
    }
  );
};

module.exports = {
  obtenerAdministradores,
  obtenerAdministradorPorId,
  crearAdministrador,
  actualizarAdministrador,
  eliminarAdministrador,
  login,
};
