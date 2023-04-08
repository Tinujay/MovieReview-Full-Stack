const React = require('react');
const Def = require('../default');

function MovieReview({ movie, reviews }) {
  return (
    <Def>
      <main className="movie-details">
        <h1>{movie.title}</h1>
        <div>
        <div className="image-container">
          <img src={movie.poster} alt={`${movie.title} Poster`} />
        </div>
          <p>Genre: {movie.genre}</p>
          <p>Plot: {movie.plot}</p>

          <a href={`/movies/${movie.id}/edit`} class="btn btn-primary">Edit Movie</a>

          <form method="POST" action={`/movies/${movie.id}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
          </form>
        </div>
        <hr />

        <div className="form">
          <h2>Lights, Camera, Opinions: Share Your Thoughts on This Movie!</h2>
          <form method="POST" action={`/movies/${movie.id}`} class="review-form">
            <div class="form-row">
            <div class="form-group col-md-3">
              <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required/>
            </div>
            <div class="form-group col-md-1">
              <label for="rating">Rating:</label>
                <input type="number" class="form-control" id="rating" name="rating" min="0" max="5" required/>
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-12">
              <label for="review">Review:</label>
                <textarea class="form-control" id="review" name="review" rows="5" cols="50" required></textarea>
            </div>
            </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>    

        <hr />
        
      </main>
    </Def>
  );
}

module.exports = MovieReview;

