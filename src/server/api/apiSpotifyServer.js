
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var Spotify = require('./Spotify');





var spotifyApi = app.route();

spotifyApi.use(bodyParser.json());

spotifyApi.route('/artists').get(function (req, res, next) {
    var query = req.query.q;
    Spotify.searchArtists(query).then(function(data){
        res.json(data);
    })


});
spotifyApi.route('/albums').get(function (req, res, next) {
    var query = req.query.q;
    Spotify.searchAlbums(query).then(function(data){
        res.json(data);
    })


});