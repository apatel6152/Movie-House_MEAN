
const request = require('request');

var apiOptions = {
    server: 'http://localhost:3000'
};

var renderMovieListPage = function(req, res, responseBody) {

    var message;

    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
          message = "No Movies found!";
        }
    }
    res.render('list-display', { 
        title: 'Movie list', 
        movies: responseBody,
        message: message 
    }); 
    // console.log(responseBody);
};

module.exports.movielist = function (req, res) {

    var requestOption, path;

    var path = '/api/movies';

    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOption, function(err, response, body) {

        renderMovieListPage(req, res, body);
        // if(err) {
        //     console.log(err);
        // } else if(response.statusCode === 200) {
        //     res.render('list-display', { 
        //         title: 'Movie list', 
        //         movies: body 
        //     }); 
        // } else {
        //     console.log(response.statusCode);
        // }        
        // console.log(body);
    });
}


const _renderCreatePage = function(req, res) {
    res.render('create', {
        title: "create-new-movie"
    });
};

module.exports.addNewMovie = function(req, res) {
    _renderCreatePage(req, res);
}

module.exports.doAddNewMovie = function(req,res) {
    const path = '/api/movies';
    const postdata = {
        name: req.body.name,
        genre: req.body.genre,
        cast: req.body.cast,
        director: req.body.director,
        duration: req.body.duration,
        rating: req.body.rating,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        image: req.body.image
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200) {
                res.redirect('/list');
            }
        }
    );
};


var renderEditListPage = function(req, res, responseBody) {

    res.render('edit-movie', { 
        title: 'Edit', 
        movies: responseBody,
       
    }); 
    // console.log(responseBody);
};

module.exports.editMovie = function (req, res) {

    var requestOption, path;

    var path = '/api/movies/' + req.params.movieid;

    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOption, function(err, response, body) {

        renderEditListPage(req, res, body);
    
    });
}


module.exports.doEditMovie = function(req,res) {
    const path = '/api/movies/' + req.params.movieid;
    const postdata = {
        name: req.body.name,
        genre: req.body.genre,
        cast: req.body.cast,
        director: req.body.director,
        duration: req.body.duration,
        rating: req.body.rating,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        image: req.body.image
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'PUT',
        json: postdata
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200) {
                res.redirect('/list');
            }
        }
    );
};



module.exports.doDeleteMovie = function(req,res) {
    const path = '/api/movies/' + req.params.movieid ;
    
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'DELETE',
        json: {}
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 204) {
                res.redirect('/list');
            }
        }
    );
};
