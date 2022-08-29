var mongoose = require('mongoose');


var reviewSchema = mongoose.Schema({
    author: {
        type: String,
        //required: true
    },
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.Now
    }
});

var movieSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 1,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    cast: {
        type: [String],
       required: true
    },
    director: {
        type: String,
       required: true
    },
    duration: {
        type: Number,
       required: true
    },
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    releaseDate: {
        type: Date,
        'default': Date.Now,
       required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    //releaseDate: [releaseDateSchema],
    reviews : [reviewSchema]
});

mongoose.model('movie', movieSchema, 'movies');


// var releaseDateSchema = mongoose.Schema({
//     day: {
//         type: Number,
//         require: true
//     },
//     month: {
//         type: String,
//         require: true
//     },
//     Year: String,
//     createdOn: {
//         type: Date,
//         'default': Date.Now
//     }
// });