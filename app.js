// Conexão MongoDB
const mongoDB = require("./utils/mongoDB");
mongoDB.connect();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

// Configuração da View Engine
app.set("view engine", 'ejs');

// Define uso dos arquivos da pasta public
app.use(express.static(__dirname + '/public'));

// Error connect
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.message });
})


// Refatorar depois
// const routesView = require('./routes/api');
// app.use('/', routesView);

const routesApi = require('./routes/api');
app.use('/api', routesApi);

const port = 8080;
app.listen(port, () => {
    console.log("Servidor executando na porta: " + port);
    console.log("VIEW: http://localhost:8080/api");
})