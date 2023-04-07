const React = require('react');
const Def = require('../default');

function EditForm(props) {
  const { movie } = props;
  return (
    <Def>
      <h1>Edit Movie</h1>
      <form method="POST" action={`/movies/${movie._id}?_method=PUT`}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" id="title" name="title" defaultValue={movie.title} required />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select className="form-control" id="genre" name="genre" defaultValue={movie.genre} required>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="plot">Plot</label>
          <textarea className="form-control" id="plot" name="plot" defaultValue={movie.plot} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="poster">Poster URL</label>
          <input className="form-control" type="url" id="poster" name="poster" defaultValue={movie.poster} required />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </Def>
  );
}

module.exports = EditForm;
