const mongoose = require('mongoose')
const urlSlugs = require('mongoose-url-slugs');

const Blog = new mongoose.Schema({
  title: {type: String, trim: true, required: true},
  category: {type: String, trim: true, required: true},
  content: {type: String, trim: true, required: true},
  author: {type: String, trim: true, required: true, default: 'João Vanzuita'},
  createdAt: {type: Date, default: Date.now}
})

Blog.plugin(urlSlugs('title'));

module.exports = mongoose.model('Blog', Blog)
