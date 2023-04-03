require('dotenv').config()
const express = require('express');
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/movies', require('./controllers/movies'))



app.get('/', (req, res) => {
    res.render('home')          //renders the home.jsx, already knows to look for 'views' folder
})


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


app.listen(process.env.PORT, () => {
    console.log('I am awake!')
})