const router = require("express").Router();
const route = '../Controllers/auth/';

router.route('/register').post(require(`${route}register`));

module.exports = router;