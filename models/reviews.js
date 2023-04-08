const mongoose = require('mongoose')

//Review Blueprint 
const reviewSchema = new mongoose.Schema({
    name: {
      type: String,
      default: 'Anonymous',
    },
    review: {
      type: String,
      required: true,
      minlength: 2
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    }
});

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review;