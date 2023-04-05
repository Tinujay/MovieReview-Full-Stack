const React = require('react')
const Def = require('../default')

function Index({ movies }) {
  return (
    <Def>
      <main>
        <h1>Your Movie List</h1>
        {movies.map((movie) => (
          <div key={movie._id}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            {movie.poster ? (
              <img src={movie.poster} alt={`${movie.title} Poster`} />
            ) : (
              <p>No poster available</p>
            )}
          </div>
        ))}
      </main>
    </Def>
  )
}

module.exports = Index


