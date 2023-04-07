const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>MovieReview</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/movies">Movies</a>
                    </li>
                    <li>
                        <a href="/movies/new">Add Movie</a>
                    </li>
                </ul>
            </nav>

             {html.children}

             <footer>
                <p>&copy; 2023 MovieReview</p>
            </footer>
            
            </body>
        </html>
    )
}

module.exports = Def 