const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// will pass the call to getStudents() function with required Request/Response parameters
router.get('/', controller.getStudents);

module.exports = router;