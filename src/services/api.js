import axios from 'axios'
require('dotenv').config()
console.log('testing buddy works')
const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
})

export default api