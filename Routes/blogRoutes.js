const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogController');

router.get('/', controller.getIndex);
router.post('/', controller.createBlog);
router.get('/create', controller.createForm);
router.get('/:id', controller.detailedBlog);
router.get('/delete/:id', controller.deleteBlog);
router.get('/update/:id', controller.getUpdateBlog);
router.post('/update/:id', controller.updateBlog);

module.exports = router;