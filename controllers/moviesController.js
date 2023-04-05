const router = require('express').Router()
const db = require('../models') 



//GET - fetches documents from the movies collection and rendered on movies/index
router.get('/', (req, res) => {
  db.Movie.find()
    .then((movies) => {
      res.render('movies/index', { movies })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

//POST - creates new database form into movies which then is navigated to '/movies'
router.post('/', (req, res) => {
  if (req.body.poster === '') { req.body.poster = undefined } //since poster is not required 
  db.Movie.create({
    title: req.body.title,
    plot: req.body.plot,
    genre: req.body.genre,
    poster: req.body.poster
  })
  .then(() => {
    res.redirect('/movies');
  })
  .catch((err) => {
    console.log(err);
    res.render('error404');
  });
});







router.get('/new', (req, res) => {
    res.render('movies/new')
  })
  



module.exports = router
