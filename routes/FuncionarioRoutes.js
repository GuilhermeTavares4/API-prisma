const express = require('express');
const FuncionarioController = require('../controllers/FuncionarioControllers');

const router = express.Router();
router.get('/funcionarios', FuncionarioController.listarFuncionarios);
router.post('/funcionario', FuncionarioController.inserirFuncionario);
router.delete('/funcionario/:id', FuncionarioController.deletarFuncionario)
router.put('/funcionario/:id', FuncionarioController.editarFuncionario)
module.exports = router