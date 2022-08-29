var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlMovie = require('../controllers/movie');
const ctrlAbout = require('../controllers/about');
const ctrlDisplay = require('../controllers/details');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', ctrlAbout.about);
router.get('/list', ctrlMovie.movielist);
router.get('/movie/:movieid', ctrlDisplay.display);

router.get('/new', ctrlMovie.addNewMovie);
router.post('/new', ctrlMovie.doAddNewMovie);

router.get('/edit/:movieid', ctrlMovie.editMovie);
router.post('/edit/:movieid', ctrlMovie.doEditMovie);

router.get('/delete/:movieid', ctrlMovie.doDeleteMovie);

module.exports = router;
