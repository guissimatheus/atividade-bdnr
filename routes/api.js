const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');

router.get('/teste', apiController.test);
router.get('/', apiController.index);

router.get('/view/funcionario/listar', apiController.funcionarioIndex);

router.get('/funcionario/listar', apiController.funcionario.listar);
router.post('/funcionario/cadastrar', apiController.funcionario.cadastrar);

router.get('/unidade/listar', apiController.unidade.listar);
router.post('/unidade/cadastrar', apiController.unidade.cadastrar);

module.exports = router;