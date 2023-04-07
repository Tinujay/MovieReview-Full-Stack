const React = require('react')
const Def = require('./default')


function Home () {
    return (
        <Def>
            <main style={{backgroundImage: "url(/images/movietheater.jpg)", height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h1 className="hero-title">Cinema Central</h1>
                <p className="hero-subtitle">Discover the latest movie reviews from our critics!</p>
                <div className="hero-action">
                    <a href="/movies" className="btn btn-primary movie button">Explore</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home

