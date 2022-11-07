const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unidadeSchema = new Schema({
    produto: {
        descricao: {
            type: String,
            required: [true, '*Campo obrigatório']
        },
        preco: {
            type: Number,
            required: [true, '*Campo obrigatório']
        },
    },
    tamanho: {
        type: String,
        required: [true, '*Campo obrigatório']
    },
    cor: {
        type: String,
        required: [true, '*Campo obrigatório']
    },
    franquia: {
        cnpj: {
            type: String,
            required: [true, '*Campo obrigatório']
        },
        telefone: {
            type: String,
            required: [true, '*Campo obrigatório']
        },
        email: {
            type: String,
            required: [true, '*Campo obrigatório']
        },
    },
    status: {
        type: Boolean,
        default: true
    },
});

const unidade = mongoose.model('Unidade', unidadeSchema);
module.exports = unidade;