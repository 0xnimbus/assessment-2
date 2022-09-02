var express = require('express');
var router = express.Router();
const todosCtrl = require("../controller/todos")

/* GET home page. */

router.get('/', todosCtrl.index)

router.post('/', todosCtrl.create)

router.delete('/', todosCtrl.delete)

module.exports = router;
