exports.unidade = require('./api/unidadeController');
exports.funcionario = require('./api/funcionarioController');

exports.test = function(req, res) {
    res.send("Hello World! Teste ao API Controller...");
}

exports.index = function(req, res) {
    res.render("index");
}

exports.funcionarioIndex = function(red, res) {
    res.render("funcionario/index");
}