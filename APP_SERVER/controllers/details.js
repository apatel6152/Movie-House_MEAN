const request = require('request');

var apiOptions = {
    server: 'http://localhost:3000'
};

var _showError = function(req, res,  status){

    var title, content;

    if (status === 404) {
        title = "404, page not found";
        content = "Oh dear. Looks like we can't find this page. Sorry.";
    } else if (status === 500) {
        title = "500, internal server error";
        content = "How embarrassing. There's a problem with our server.";
    } else {
        title = status + ", something's gone wrong";
        content = "Something, somewhere, has gone just a little bit wrong.";
    }

    res.status(status).render('generic-text', { title, content });

};

var renderMovieInfoPage = function(req, res, responseBody) {

    // var message;

    // if (!(responseBody instanceof Array)) {
    //     message = "API lookup error";
    //     responseBody = [];
    // } else {
    //     if (!responseBody.length) {
    //       message = "No Movies found!";
    //     }
    // }
    res.render('details', { 
        title: 'Movie Info', 
        movies: responseBody
    }); 
    console.log(responseBody);
};

module.exports.display = function (req, res) {

    var requestOption, path;

    var path = '/api/movies/' + req.params.movieid;

    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOption, function(err, response, body) {
        if(response.statusCode === 200) {
            renderMovieInfoPage(req, res, body);
        }
        else {
            _showError(req, res, response.statusCode);
        }
    });
    
}