const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// will pass the call to getCourses() function with required Request/Response parameters
router.get('/', controller.getCourses);
router.post('/', controller.addCourse);
router.get("/:id", controller.getCourseById);


module.exports = router;