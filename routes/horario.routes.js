const { Router } = require('express');
const { saveH, editH, removeH, getH, getAll, getByPk } = require('../controller/horario.controller');
const router = Router();

router.post('/', saveH);
router.put('/:codigo', editH);
router.delete('/:codigo', removeH);
router.get('/', getH);
router.get('/all', getAll);
router.get('/pk/:codigo', getByPk);

module.exports = router;