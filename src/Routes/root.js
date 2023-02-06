const router = require("express").Router();
const controller = require('../Controllers/root/rootController');

router.route('/').get(controller.getRoot);

module.exports = router;