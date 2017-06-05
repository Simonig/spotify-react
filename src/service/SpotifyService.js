var axios = require('axios');
var url = 'http://localhost:8090/';

export function searchArtists(query){
   return axios.get(url + 'artists?q='+ query)
}

export function searchAlbums(query){
    return axios.get(url + 'albums?q=' + query)

}



// Retrieve an access token and a refresh token