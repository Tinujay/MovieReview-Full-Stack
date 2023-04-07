const React = require('react');
const Def = require('../default');

function MovieReview({ movie, reviews }) {
  return (
    <Def>
      <main>
        <h1>{movie.title}</h1>
        <div>
          <img src={movie.poster} alt={`${movie.title} Poster`} />
          <p>Genre: {movie.genre}</p>
          <p>Plot: {movie.plot}</p>
          <a href={`/movies/${movie.id}/edit`} class="btn btn-primary">Edit Movie</a>
        </div>
        <hr />

        <h2>Lights, Camera, Opinions: Share Your Thoughts on This Movie</h2>
        <form method="POST" action={`/movies/${movie.id}`}>
            <div className="form-group col-sm-4">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="form-group col-sm-2">
                <label htmlFor="rating">Rating:</label>
                <input type="number" id="rating" name="rating" min="0" max="5" required />
            </div>
            <div className="form-group col-sm-6">
                <label htmlFor="review">Review:</label>
                <textarea id="review" name="review" rows="5" cols="50" required></textarea>
            </div>
                <button type="submit">Submit</button>
        </form>

        <hr />
        
      </main>
    </Def>
  );
}

module.exports = MovieReview;

