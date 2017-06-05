
var SpotifyWebApi = require('spotify-web-api-node');
var config = require('./config');




var Spotify = new SpotifyWebApi({
    clientId : config.CLIENT_ID,
    clientSecret : config.CLIENT_SECRET
});


Spotify.clientCredentialsGrant()
    .then(function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        Spotify.setAccessToken(data.body['access_token']);
    }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    });

module.exports = Spotify;




// Retrieve an access token and a refresh token