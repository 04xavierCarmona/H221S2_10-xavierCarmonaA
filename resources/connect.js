var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/'));


var conexion = mysql.createConnection({           //jesus
    host: "54.160.18.109",
    user: "carmona",
    password: "xavier",
    database: "REGISTRATE",
  });
  conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/EDUCANDO", (req, res) => {
	let data = {
    	userped: req.body.USERPED,
      emausped: req.body.EMAUSPED,
    	celusped: req.body.CELUSPED,
    	foodped: req.body.FOODPED,
      teledu: req.body.TELEDU,
    	msgped: req.body.MSGPED
	};
	let sql = "INSERT INTO EDUCANDO SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });

  
