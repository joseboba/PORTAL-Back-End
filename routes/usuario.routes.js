const { Router } = require('express');
const { saveU, editU, removeU, getU, getAll, getByPk } = require('../controller/usuario.controller');
const router = Router();

router.post('/', saveU);
router.put('/:codigo', editU);
router.delete('/:codigo', removeU);
router.get('/', getU);
router.get('/all', getAll);
router.get('/pk/:codigo', getByPk);

module.exports = router;