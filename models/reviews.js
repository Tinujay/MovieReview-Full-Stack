const mongoose = require('mongoose')

//Review Blueprint 
const reviewSchema = new mongoose.Schema({
    name: {
      type: String,
      default: 'Anonymous',
      minlength: 2

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

module.exports = mongoose.model('Review', reviewSchema)