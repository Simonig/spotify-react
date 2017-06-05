var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());

var Spotify = require('./Spotify');
var albums = express.Router();
var artists = express.Router();


albums.use(bodyParser.json());
artists.use(bodyParser.json());

artists = app.route('/artists').get(function (req, res, next) {
    var query = req.query.q;
    Spotify.searchArtists(query).then(function (data) {
        res.json(data);
    })
});


albums = app.route('/albums').get(function (req, res, next) {
    var query = req.query.q;
    Spotify.searchAlbums(query).then(function (data) {
        res.json(data);
    })
});


app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
