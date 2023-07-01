const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "ecommerce_sm34",
// });

const connection = mysql.createConnection({
  host: "mysql-opset.alwaysdata.net",
  user: "opset_admin",
  password: "Holamundo2023",
  database: "opset_ecommerce",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos", error);
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
});

module.exports = connection;
