const Blog = require('../model/blog');

const getIndex = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then(result => res.render('index.ejs',
    {
        title: 'All Blogs',
        blogs: result
    }))
    .catch(err => res.render('404.ejs', {title: 'BlogSphere'}));
}; 

const createBlog = (req, res) => {
        const blog = new Blog({
            title: req.body.title,
            snippet: req.body.snippet,
            body: req.body.body
        });
        blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(err => res.send('Could not add blog'));
};

const createForm = (req, res) => {
    res.render('create.ejs', {title: 'New Blog'});
};

const detailedBlog = (req, res) => {
    Blog.findById(req.params.id)
    .then(result => res.render('detailed.ejs', 
    {
         title: result.title,
         snippet: result.snippet,
         body: result.body,
         id: result._id
    }))
    .catch(err => res.render('404.ejs', {title: 'BlogSphere'}));
};

const deleteBlog = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(result => {
        res.redirect('/blogs');
    })
    .catch(err => res.send("Could not delete blog"));
};

const getUpdateBlog = (req, res) => {
    Blog.findById(req.params.id)
    .then(result => {
        res.render('create.ejs', 
    {title: 'New Blog',
    b_title: result.title,
    b_snippet: result.snippet,
    b_body: result.body,
    b_id: result._id
    });
    })
    .catch(err => console.log(err));
};

const updateBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    })
    .then(result => res.redirect('/blogs'))
    .catch(err => res.render('404.ejs'), {title: 'BlogSphere'});
};

module.exports = {
    getIndex,
    createBlog,
    createForm,
    detailedBlog,
    deleteBlog,
    getUpdateBlog,
    updateBlog
};
