const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');

router.get('/teste', apiController.test);

router.get('/funcionario/listar', apiController.funcionario.listar);
router.post('/funcionario/registrar', apiController.funcionario.registrar);

router.get('/unidade/listar', apiController.unidade.listar);
router.post('/unidade/registrar', apiController.unidade.registrar);

module.exports = router;