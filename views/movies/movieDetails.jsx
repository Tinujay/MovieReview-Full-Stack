const React = require('react');
const Def = require('../default');

function MovieReview({ movie }) {
  
  return (
    <Def>
      <main className="movie-details-page">

        <div className ="movie-info" style={{backgroundImage: "url(/images/navyblue.jpg)", height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
          <h1>{movie.title}</h1>
            <div className="movie-details-container">
              <div className="image-container">
                <img src={movie.poster} alt={`${movie.title} Poster`} />
              </div>
              <div className="movie-details-info" style={{backgroundImage: "url(/images/navyblue.jpg)", height: "60vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>     
                <div className="rating-stars">
                  {Array.from(Array(5)).map((_, index) => (
                    <span key={index} className={index < Math.round(movie.reviews.reduce((acc, review) => acc + review.rating, 0) / movie.reviews.length) ? 'active' : ''}>★</span>
                  ))}
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
            </div>
        </div>
  
        <hr />

        <div className="review-section">
          <h2>Reviews:</h2>
            <ul className="reviews-list">
              {movie.reviews.map((review) => (
                <li key={review.id} className="review-box">
                  <div className="review-name">{review.name}</div>
                  <div className="review-text"><b><q>{review.review}</q></b></div>
                  <div className="review-rating">
                    <span>Rating:</span>
                    <div className="rating-stars">
                      {Array.from(Array(5)).map((_, index) => (
                        <span key={index} className={index < review.rating ? 'active' : ''}>★</span>
                      ))}
                    </div>
                    <form method="POST" action={`/movies/${movie.id}/reviews/${review.id}?_method=DELETE`}>
                      <button type="submit" className="btn btn-danger">Delete Review</button>
                    </form>

                  </div>
              </li>
            ))}
          </ul>
      </div>

        <hr />

        <div className="form">
          <h2>Lights, Camera, Opinions: Share Your Thoughts on This Movie!</h2>
          <form method="POST" action={`/movies/${movie.id}`} class="review-form">
            <div class="form-row">
            <div class="form-group col-md-3">
              <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name"/>
            </div>
            <div class="form-group col-md-1">
              <label for="rating">Rating:</label>
                <input type="number" class="form-control" id="rating" name="rating" min="1" max="5" required/>
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

