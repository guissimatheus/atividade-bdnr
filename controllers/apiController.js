exports.unidade = require('./api/unidadeController');
exports.funcionario = require('./api/funcionarioController');

const funcionario = require('../models/funcionarioModel');
const unidade = require('../models/unidadeModel');

exports.test = function(req, res) {
    res.send("Hello World! Teste ao API Controller...");
}

exports.index = function(req, res) {
    res.render("index");
}

exports.funcionarioIndex = function(req, res) {
    res.render("funcionario/index");
}

exports.funcionarioCadastro = function(req, res) {
    res.render("funcionario/cadastrar");
}

exports.unidadeIndex = async function(req, res) {
    let arrayUnidades;

    // Refatorar -> utilizar API
    await unidade.find({}).then(data => {
        // console.log(data);
        arrayUnidades = data;
    });
    res.render("unidade/index", { arrayUnidades: arrayUnidades });
}

exports.unidadeCadastro = function(req, res) {
    res.render("unidade/cadastrar");
}

exports.unidadeEditar = function(req, res) {
    // console.log(req.params)
    res.send(req.params);
    
    // Pegar documento e jogar no formulário
}