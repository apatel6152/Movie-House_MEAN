const mongoose = require('mongoose');
const mov = mongoose.model('movie');

var sendJSONresponse = function(res, status, content) {
    res.status(status).json(content);
};

var buildMovieList = function(results){

    var movies = [];

    results.forEach(function(movie){
        movies.push({
            name: movie.name,
            genre: movie.genre,
            cast: movie.cast,
            director: movie.director,
            duration: movie.duration,
            rating: movie.rating,
            releaseDate: movie.releaseDate,
            description: movie.description,  
            image: movie.image,         
            _id: movie._id
        });
    });

    return movies;
};

module.exports.getMovieList = function(req, res) {
    //sendJSONresponse(res, 200, {message: 'getMovieList successful'});

    try {

        mov.find().exec(function(err, results){
    
            if(err) {
                sendJSONresponse(res, 500, err);
                return;
            }
    
            var movies = buildMovieList(results);
            sendJSONresponse(res, 200, movies);
    
        });
        
    }
    catch(err) {
        sendJSONresponse(res, 500, err);
    }
};

module.exports.getSingleMovie = function(req, res) {

    //sendJSONresponse(res, 200, {message: 'getSingleMovie successful'});

    if(!req.params || !req.params.movieid) {
        sendJSONresponse(res, 400, 'The movieid parameter is required');
        return;
    }

    try {

        mov.findById(req.params.movieid).exec(function(err, movie){


            if(err) {
                sendJSONresponse(res, 500, err);
                return;
            }
    
            if(!movie) {
                sendJSONresponse(res, 404, 'movie not found');
                return;
            }
    
            sendJSONresponse(res, 200, movie);

        });
    }
    catch(err) {
        sendJSONresponse(res, 500, err);
    }  
};

module.exports.createMovie = function(req, res) {
   // sendJSONresponse(res, 200, {message: 'createMovie successful'});
    //b
    var newMovie = {
        name: req.body.name,
        genre: req.body.genre.split(', '),
        cast: req.body.cast.split(', '),
        director: req.body.director,
        duration: parseInt(req.body.duration),
        rating: parseInt(req.body.rating),
        releaseDate: req.body.releaseDate,
        description: req.body.description,  
        image: req.body.image
    };   

    mov.create(newMovie, function(err, movie){

        if(err){
            sendJSONresponse(res, 500, err);
            return
        }
        sendJSONresponse(res, 200, movie);
    });
};

module.exports.updateMovie = function(req, res) {
    //sendJSONresponse(res, 200, {message: 'updateMovie successful'});

    if(!req.params.movieid){
        sendJSONresponse(res, 400, { "message": "Movieid is required" });
        return;
    }

    mov.findById(req.params.movieid).exec(function(err, movie){

        if(err){
            sendJSONresponse(res, 500, err);
            return;
        }

        if (!movie) {
            sendJSONresponse(res, 404, { "message": "movie not found" });
            return;
        }

        movie.name = req.body.name;
        movie.genre = req.body.genre.toString().split(',');
        movie.cast = req.body.cast.toString().split(',');
        movie.director = req.body.director;
        movie.duration = parseInt(req.body.duration);
        movie.rating = parseInt(req.body.rating);
        movie.releaseDate = req.body.releaseDate;
        movie.description = req.body.description;
        movie.image = req.body.image;

        movie.save(function(err, movie){
            if (err) {
                sendJSONresponse(res, 500, err);
            } else {
                sendJSONresponse(res, 200, movie);
            }
        });

    });
};

module.exports.deleteMovie = function(req, res) {
    //sendJSONresponse(res, 200, {message: 'deleteMovie successful'});

    if (!req.params.movieid) {
        sendJSONresponse(res, 400, { "message": "No movieid" });
        return;
    }

    mov.findByIdAndDelete(req.params.movieid).exec(function(err, movie){

        if (err) {
            sendJSONresponse(res, 500, err);
            return;
       }

       sendJSONresponse(res, 204, null);

    });
};