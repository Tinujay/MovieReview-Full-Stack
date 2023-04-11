const React = require('react');
const Def = require('../default');

function Index({ movies }) {
  movies.sort((a, b) => a.title.localeCompare(b.title)); //sorting it in alphabetical order 

  return (
    <Def>
      <main className="movie-page-container" style={{backgroundImage: "url(/images/popcorn.jpg)", minheight: "110vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
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
                  <img src="defaultpict.jpg" alt="Default Poster" />
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
