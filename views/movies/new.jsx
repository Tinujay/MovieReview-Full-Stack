const React = require('react')
const Def = require('../default')

function newMovieForm () {
    return (
        <Def>
            <main>
                <h1>Add your Movie!</h1>
                <form method="POST" action="/movies">  {/* submitted to /movies */}
                    <div class="form-group">
                        <label for="title">Movie Title</label>
                        <input class="form-control" id="title" name="title" required minlength="2"></input>
                    </div>
                    <div class="form-group">
                        <label for="plot">Plot</label>
                        <textarea class="form-control" id="plot" name="plot" required minlength="10"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="genre">Genre</label>
                        <select class="form-control" id="genre" name="genre" required>
                            <option value="">Select a genre</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="poster">Movie Poster</label>
                        <input class="form-control" id="poster" name="poster" pattern="^https?://.*$"></input>
                        <small class="form-text text-muted">Poster must be a valid URL.</small>
                    </div>
                    <button class="btn btn-primary" type="submit">Add Movie</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = newMovieForm

