const React = require('react');
const Def = require('../default');

function Index({ movies }) {
  const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Def>
      <main className="movie-page-container" style={{backgroundImage: "url(/images/popcorn.jpg)", minheight: "100vh", width: "100vw", backgroundSize: "100% 100%", backgroundPosition: "center"}}>
        <h1 className="movie-list-title">Critic's Picks</h1>
        <div className="movie-row">
            {movies.map((movie) => (
                <div key={movie._id} className="movie-container">
                <h2>
                    <a className="movie-title" href={`/movies/${movie._id}`}>{movie.title}</a>
                </h2>
                {movie.poster ? (
                <img src={movie.poster} alt={`${movie.title} Poster`} />
                ) : (
                <p>No poster available</p>
                )}
                <p>Genre: {movie.genre}</p>
                </div>
             ))}
        </div>
    </main>
    </Def>
  );
}

module.exports = Index;
