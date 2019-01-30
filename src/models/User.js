const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: {type: String, trim: true, required: true},
  email: {type: String, trim:true, required:true},
  password: {type: String, trim:true},
  // isAdmin: {type: Number, required:true, default: 0},
  createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', User)
