var express = require('express');
var router = express.Router();

const ctrlMovies = require('../controllers/movie');

// movies
router.get('/movies', ctrlMovies.getMovieList);
router.post('/movies', ctrlMovies.createMovie);
router.get('/movies/:movieid', ctrlMovies.getSingleMovie);
router.put('/movies/:movieid', ctrlMovies.updateMovie);
router.delete('/movies/:movieid', ctrlMovies.deleteMovie);


module.exports = router;