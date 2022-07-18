var express = require ('express');
var router = express.Router ();

router.get ('/', finalizarController.get);

module.exports = router;
