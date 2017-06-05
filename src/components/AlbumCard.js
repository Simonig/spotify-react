import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';


export default class AlbumCard extends Component {

    renderAlbumData(albumData) {

        //render the Album list item  with the basic info and a link to the spotify url

        const imageUrl = albumData.images[0].url ? albumData.images[0].url : null;
        const urlSpotify = albumData.external_urls.spotify ? albumData.external_urls.spotify : '#';

        const name = albumData.name ? albumData.name : null;

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

            </a>


        );
    }

    render() {
        const album = this.props.album;

        return (
            <span>

                {this.renderAlbumData(album)}
            </span>
        );
    }
}

