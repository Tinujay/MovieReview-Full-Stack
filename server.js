require('dotenv').config() //always placed on top 

//Express framework for Node.js
const express = require('express');
const app = express()

const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//Express settings / Middleware 
app.set('view engine', 'jsx') //sets the view engine to jsx. This means that when you render a view, Express will automatically look for .jsx files in the views directory.
app.engine('jsx', require('express-react-views').createEngine()) //sets up the view engine to use the express-react-views module for rendering JSX files.
app.use(express.static('public')); //middleware function that serves static files from the public directory, such as your css
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


//Controllers & Routes 
app.use('/movies', require('./controllers/moviesController')) //whenever there is a request for a URL that starts with /movies, it should use the moviesController to handle the request.


app.get('/', (req, res) => {
    res.render('home')          //renders the home page, already knows to look for 'views' folder
})


app.get('*', (req, res) => {
    res.render('error404')     //renders 404 page 
})

//Listens for connections 
app.listen(process.env.PORT, () => {
    console.log('I am awake!')
})