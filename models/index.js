//Connect to Mongoose 
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Review = require('./reviews')
module.exports.Movie = require('./movies')