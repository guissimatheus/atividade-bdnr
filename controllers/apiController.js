exports.unidade = require('./api/unidadeController');
exports.funcionario = require('./api/funcionarioController');

exports.test = function(req, res) {
    res.send("Hello World! Teste ao API Controller...");
}