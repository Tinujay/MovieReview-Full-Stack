const router = require('express').Router()
const db = require('../models') 



//GET - retreives all the movies collection database in MongoDB and renders on movies/index
router.get('/', (req, res) => {
  db.Movie.find()
    .then((movies) => {
      res.render('movies/index', { movies })    //movies array from database 
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


//POST - creates new database form into movies collection which then navigated to '/movies' (your index page)
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



//GET - new movie (form) route
router.get('/new', (req, res) => {
    res.render('movies/new')
  })
  


//GET - renders a specific movie details 
router.get('/:id', (req, res) => {
  db.Movie.findById(req.params.id)
    .then((movie) => {
      res.render('movies/MovieDetails', { movie })
    })
    .catch((error) => {
      console.log(error)
      res.render('error404')
     })
})
  

//POST - creates new review in the database and navigates back to the movie details page
router.post('/:id', (req, res) => {
  db.Review.create({
    name: req.body.name,
    review: req.body.review,
    rating: req.body.rating,
    movieId: req.params.id
  })
  .then(() => {
    res.redirect(`/movies/${req.params.id}`);
  })
  .catch((error) => {
    console.log(error);
    res.render('error404');
  });
});



module.exports = router
