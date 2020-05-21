const express = require('express')
const router = express.Router();

const Blog = require('../../modules/Blog')
router.get('/', (req, res) => {
    Blog.find().sort({ date: -1 }).then(blog => res.json(blog))
})
router.post('/', (req, res) => {
    console.log(`recieved a request `)
    const newpost = new Blog({
        author: req.body.author,
        title: req.body.title,
        body: req.body.body
    });
    console.log(newpost)
    newpost.save().then(() => res.json(`File saved`))

})
router.delete('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.remove().then(res.json({ status: 'success' })))
        .catch((err) => res.status(404).json({ status: 'not there' }));
})
module.exports = router;