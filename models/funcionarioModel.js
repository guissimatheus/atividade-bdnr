const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    nome: {
        type: String,
        required: [true, '*Campo obrigatório']
    },
    cpf: {
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
    perfil: {
        type: String,
        required: [true, '*Campo obrigatório']
    },
    status: {
        type: Boolean,
        default: true
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
        responsavel: {
            nome: {
                type: String,
                required: [true, '*Campo obrigatório']
            },
            telefone: {
                type: String,
                required: [true, '*Campo obrigatório']
            },
        },
    }
});

const funcionario = mongoose.model('Funcionario', funcionarioSchema);
module.exports = funcionario;