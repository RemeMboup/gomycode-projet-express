const express=require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', { title: 'Home', message: 'Welcome to home page!' })
  })
  router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', message: 'Welcome to contact page!' })
  })
  router.get('/services', (req, res) => {
    res.render('services', { title: 'Service', message: 'Welcome to services page!' })
  })
  module.exports=router;