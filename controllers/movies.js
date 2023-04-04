const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('movies/index')
})

router.get('/new', (req, res) => {
    res.render('movies/new')
  })
  

module.exports = router
