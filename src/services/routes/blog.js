require('dotenv').config()
const express = require('express')
const router = express.Router()
const Blog = require('../../models/Blog')
const authenticationRequired = require('./authenticationRequired')

router.post('/create', authenticationRequired, async (req, res) => {
  const { title, category, content } = req.body
  const Post = new Blog({title: title, category: category, content: content})
  try {
    await Post.save()
    return res.sendStatus(200)
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.sendStatus(409)
    }
    return res.sendStatus(500)
  }
})

router.get('/posts', async (req, res) => {
  let blog
  try {
    blog = await Blog.find().limit(5).sort({createdAt: -1})
    return res.send(blog)
  } catch (err) {
    return res.send(500).json(err)
  }
})

router.get('/post', async (req, res) => {
  const postTitle = req.query.slug
  let blog
  try {
    blog = await Blog.findOne({slug: postTitle})
    console.log(blog)
    return res.send(blog)
  } catch (err) {
    // post not found
    return res.send(404).json(err)
  }
})

module.exports = router