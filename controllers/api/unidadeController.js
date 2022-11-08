const unidade = require('../../models/unidadeModel');

exports.listar = function(req, res) {
    unidade.find({}).then(unidade => {
        res.send(unidade);
    });
}

exports.cadastrar = function(req, res, next) {
    console.log("POST request:", req.body);

    let data = {
        produto: {
            descricao: req.body.produtoDescricao,
            preco: req.body.produtoPreco,
        },
        tamanho: req.body.tamanho,
        cor: req.body.cor,
        franquia: {
            cnpj: req.body.franquiaCnpj,
            telefone: req.body.franquiaTelefone,
            email: req.body.franquiaEmail
        }
    }

    unidade.create(data)
        .then(unidade => {
            res.send("Documento criado com sucesso!");
            console.log("Documento criado com sucesso!");
            console.log(unidade);
        })
        .catch(next);

    // Lidar com redirect
}

exports.atualizar = function(req, res, next) {
    // console.log("PUT request:", req.body);

    // Gambiarra do Ronaldo
    console.log("UPDATE request:", req.params);
    console.log("Body:", req.body)

    let data = {
        produto: {
            descricao: req.body.produtoDescricao,
            preco: req.body.produtoPreco,
        },
        tamanho: req.body.tamanho,
        cor: req.body.cor,
        franquia: {
            cnpj: req.body.franquiaCnpj,
            telefone: req.body.franquiaTelefone,
            email: req.body.franquiaEmail
        }
    }

    unidade.findByIdAndUpdate({ _id: req.params.id }, data)
        .then(() => {
            unidade.findOne({ _id: req.params.id })
                .then(data => {
                    console.log("Documento atualizado!");
                    console.log(data);
                    res.send(data);
                });
        })
        .catch(next);
    // 

    // unidade.create(data)
    //     .then(unidade => {
    //         res.send("Documento criado com sucesso!");
    //         console.log("Documento criado com sucesso!");
    //         console.log(unidade);
    //     })
    //     .catch(next);

    // Lidar com redirect
}