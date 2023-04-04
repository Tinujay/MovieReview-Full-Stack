const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Opinions on the Big Screen: Share Your Movie Reviews</h1>
                <form method="POST" action="/movies">
                <div className="form-group">
                    <label htmlFor="title">Movie Title</label>
                    <input className="form-control" id="title" name="title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Movie Cover</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Director</label>
                    <input className="form-control" id="director" name="director" />
                </div>
                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year</label>
                    <input className="form-control" id="releaseYear" name="releaseYear" />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input className="form-control" id="rating" name="rating" required />
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <input className="form-control" id="review" name="review" required/>
                </div>

                <input className="btn btn-primary" type="submit" value="Add Review" />   
            </form>
            </main>
        </Def>
    )
}

module.exports = new_form

