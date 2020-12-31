const { Router } = require('express');
const { saveC, editC, removeC, getC, getAll, getByPk } = require('../controller/canal.controller');
const router = Router();

router.post('/', saveC);
router.put('/:codigo', editC);
router.delete('/:codigo', removeC);
router.get('/', getC);
router.get('/all', getAll);
router.get('/pk/:codigo', getByPk);

module.exports = router;