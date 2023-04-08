const mongoose = require('mongoose')

//Movie Blueprint
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
      },
      plot: {
        type: String,
        required: true,
        minlength: 10
      },
      genre: {
        type: String,
        required: true,
        enum: ['action', 'comedy', 'drama', 'horror', 'romance', 'thriller', 'fantasy']
      },
      poster: {
        type: String,
        default: 'images/defaultpict.jpg',
        },
      reviews: [{type: mongoose.Schema.Types.ObjectId, 
        ref:"Review"}]
      
})


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;