const funcionario = require('../../models/funcionarioModel');

exports.listar = function(req, res) {
    funcionario.find({}).then(funcionario => {
        res.send(funcionario);
    });
}

exports.registrar = function(req, res, next) {
    console.log("POST request:", req.body);

    let data = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email,
        perfil: req.body.perfil,
        franquia: {
            cnpj: req.body.franquiaCnpj,
            telefone: req.body.franquiaTelefone,
            email: req.body.franquiaEmail,
            responsavel: {
                nome: req.body.responsavelNome,
                telefone: req.body.responsavelTelefone,
            },
        }
    }

    funcionario.create(data)
        .then(funcionario => {
            res.send("Documento criado com sucesso!");
            console.log("Documento criado com sucesso!");
            console.log(funcionario);
        })
        .catch(next);
}