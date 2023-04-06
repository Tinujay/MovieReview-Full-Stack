const React = require('react')
const Def = require('./default')


function Home () {
    return (
        <Def>
            <main>
            <h1 className="hero-title">Welcome to Movie Reviews!</h1>
            <p className="hero-subtitle">Get the latest news and reviews on the best movies out there.</p>
                <div className="hero-action">
                    <a href="/movies" className="btn btn-primary">Sign up</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home


