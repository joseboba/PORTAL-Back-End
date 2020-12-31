const { Router } = require('express');
const { saveD, editD, removeD, getD, getAll, getByPk } = require('../controller/distribuidor.controller');
const router = Router();


router.post('/', saveD);
router.put('/:codigo', editD);
router.delete('/:codigo', removeD);
router.get('/', getD);
router.get('/all', getAll)
router.get('/pk/:codigo', getByPk);

module.exports = router;