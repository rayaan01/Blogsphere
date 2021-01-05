const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./Routes/blogRoutes');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view-engine', 'ejs');

mongoose.connect(blogRoutes.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(res => {
    console.log("Connected to db");
    app.listen(3000, () => console.log("Server started at port 3000"));
})
.catch(err => console.log("Failed to connect" + err));

app.get('/', (req, res) => {
   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs', {title: 'About'});
});

app.use('/blogs',blogRoutes.router);

app.use((req, res) => {
    res.status(404).render('404.ejs', {title: 'BlogSphere'});
});

