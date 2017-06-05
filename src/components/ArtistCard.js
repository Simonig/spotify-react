import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';


export default class ArtistCard extends Component {

    renderArtistData(artistData) {

        //render the artists list item with the basic info and a link to the spotify url
        const imageUrl = artistData.images[0] ? artistData.images[0].url : null;
        const urlSpotify = artistData.external_urls.spotify ? artistData.external_urls.spotify : '#';
        const name = artistData.name ? artistData.name : null;
        const popularity = artistData.popularity ?
            <p className="list-group-item-text">Popularity: {artistData.popularity}</p> : null;

        const genre = (artistData.genres && artistData.genres.length > 0) ?
            <p className="list-group-item-text">Genre: {artistData.genres[0]}</p> : null;


        //render the Thumbnail if there is an image URL
        function renderThumbnail(image) {
            if (image) {
                return <Thumbnail className="thumbnail" alt="64x64" src={image}/>;
            }
        }

        return (
            <a target="_blank" href={urlSpotify} className="list-group-item">
                {renderThumbnail(imageUrl)}
                <h4 className="list-group-item-heading">{name}</h4>
                {popularity}
                {genre}
            </a>
        );
    }

    render() {
        const artist = this.props.artist;

        return (
            <span>
            {this.renderArtistData(artist)}
            </span>
        )
            ;
    }
}