const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogController');

const dbURI = 'mongodb+srv://Cray:rayaan12345@cluster0.mfo3f.mongodb.net/node?retryWrites=true&w=majority';

router.get('/', controller.getIndex);
router.post('/', controller.createBlog);
router.get('/create', controller.createForm);
router.get('/:id', controller.detailedBlog);
router.get('/delete/:id', controller.deleteBlog);
router.get('/update/:id', controller.getUpdateBlog);
router.post('/update/:id', controller.updateBlog);

module.exports = {
    router,
    dbURI
};