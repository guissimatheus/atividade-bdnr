const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');

router.get('/teste', apiController.test);
router.get('/', apiController.index);

// VIEWS - Refatorar depois
router.get('/view/funcionario/listar', apiController.funcionarioIndex);
router.get('/view/funcionario/cadastrar', apiController.funcionarioCadastro);

router.get('/view/unidade/listar', apiController.unidadeIndex);
router.get('/view/unidade/cadastrar', apiController.unidadeCadastro);
router.get('/view/unidade/editar/:id', apiController.unidadeEditar);
//

router.get('/funcionario/listar', apiController.funcionario.listar);
router.post('/funcionario/cadastrar', apiController.funcionario.cadastrar);

router.get('/unidade/listar', apiController.unidade.listar);
router.post('/unidade/cadastrar', apiController.unidade.cadastrar);
// router.put('/unidade/:id', apiController.unidade.atualizar);
// Gambiarra do Ronaldo
router.post('/unidade/atualizar/:id', apiController.unidade.atualizar);

module.exports = router;