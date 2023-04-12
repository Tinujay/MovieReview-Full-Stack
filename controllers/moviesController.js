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
  

// GET - renders a specific movie details and populates the movie's reviews  
router.get('/:id', (req, res) => {
  db.Movie.findById(req.params.id)
    .populate('reviews')
    .then((movie) => {
      res.render('movies/movieDetails', { movie })
    })
    .catch((error) => {
      console.log(error)
      res.render('error404')
     })
})
  

//POST - creates new review in the database and navigates back to the movie details page
router.post('/:id', (req, res) => {
  console.log(req.body)
  if (!req.body.name) {
    req.body.name = 'Anonymous';
  }
  db.Movie.findById(req.params.id).then(movie=>{
    db.Review.create(req.body)
    .then(review => {
      movie.reviews.push(review.id)
      movie.save().then(() => {
        res.redirect(`/movies/${req.params.id}`);
      })
    })
  })
  .catch((error) => {
    console.log(error);
    res.render('error404');
  });
});


//GET - edit page (form) to that particular movie 
router.get('/:id/edit', (req, res) => {
  db.Movie.findById(req.params.id)
      .then(movie => {
          res.render('movies/edit', { movie })
      })
      .catch(err => {
          res.render('error404')
      })
})


//PUT - saves changes in database and redirects to detail page
router.put('/:id', (req, res) => {
  const { title, genre, plot, poster } = req.body;
  db.Movie.findByIdAndUpdate(req.params.id, { title, genre, plot, poster })
    .then(() => res.redirect(`/movies/${req.params.id}`))
    .catch(err => {
      console.log(err);
      res.render('error404');
    });
});


//DELETE - a movie 
router.delete('/:id', (req, res) => {
  db.Movie.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/movies')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

//DELETE - deletes individual reviews
router.delete('/:id/reviews/:reviewId', (req, res) => {
  db.Review.findByIdAndDelete(req.params.reviewId)
    .then(() => {
      res.redirect(`/movies/${req.params.id}`)
    })
    .catch(error => {
      console.log(error);
      res.render('error404')
    });
})
    
 

module.exports = router
