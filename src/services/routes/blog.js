require('dotenv').config()
const express = require('express')
const router = express.Router()
const Blog = require('../../models/Blog')
const authenticationRequired = require('./authenticationRequired')

router.post('/create', authenticationRequired, async (req, res) => {
  const { title, category, content } = req.body
  const Post = new Blog({ title: title, category: category, content: content })
  try {
    await Post.save()
    return res.sendStatus(200)
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.sendStatus(409)
    }
    console.log(err)
    return res.sendStatus(500)
  }
})

router.get('/posts', async (req, res) => {
  let blog
  try {
    blog = await Blog.find().limit(10).sort({ createdAt: -1 })
    return res.send(blog)
  } catch (err) {
    return res.send(500).json(err)
  }
})

router.get('/post', async (req, res) => {
  const postTitle = req.query.slug
  let blog
  try {
    blog = await Blog.findOne({ slug: postTitle })
    console.log(blog)
    return res.send(blog)
  } catch (err) {
    // post not found
    return res.send(404).json(err)
  }
})

router.get('/postbyid', async (req, res) => {
  let blog
  try {
    blog = await Blog.findOne({ _id: req.query.id })
    return res.json(blog)
  } catch (err) {
    return res.json(err)
  }
})

router.put('/editpost', authenticationRequired, async (req, res) => {
  // TODO: improve this call, doc is not returning what I expect
  const { id, title, category, content } = req.body
  let blog = await Blog.findOneAndUpdate(
    { _id: id },
    { $set:
      { title: title, category: category, content: content }
    }, { new: true }, (err, doc) => {
    if (err) {
      console.log('general error: ', err)
      return res.json(err)
    } else {
      console.log('doc error: ', doc)
      return res.json(doc)
    }
  })
})

router.delete('/deletepost/:id', authenticationRequired, async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    let blog = await Blog.findByIdAndRemove({ _id: id })
    if (!blog) {
      res.sendStatus(404).send('Unable to delete: post not found')
    } else {
      console.log('deleted!')
      res.json(blog)
    }
  } catch (err) {
    return res.json(err)
  }
})

router.get('/gettotalposts', async (req, res) => {
  let blog
  try {
    blog = await Blog.find().countDocuments()
    return res.json(blog)
  } catch (err) {
    return res.json(err)
  }
})

module.exports = router