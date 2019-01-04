import axios from 'axios'
require('dotenv').config()
console.log('testing buddy workds')
const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
})

export default api