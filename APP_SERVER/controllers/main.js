
module.exports.index = function (req, res) {
    res.render('index', { title: 'Welcome to MovieHub' });
}

// module.exports.availableMovie = function (req, res) {
//     res.render('index', { title: 'Available Movie', movie: availableMovieArray });
// }