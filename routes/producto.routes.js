const { Router } = require('express');
const { saveP, editP, removeP, getP, getAll, getByPk } = require('../controller/producto.controller');
const router = Router();

router.post('/', saveP);
router.put('/:codigo', editP);
router.delete('/:codigo', removeP);
router.get('/', getP);
router.get('/all', getAll);
router.get('/pk/:codigo', getByPk);

module.exports = router;