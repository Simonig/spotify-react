import React, {Component} from 'react';
import ArtistCard from '../components/ArtistCard';

export default class ArtistsList extends Component {

    //render the ArtistsList total and ArtistsCard components

    render() {
        return (
            <div className="list-group">
                <h4>{this.props.data.artists.total} results found</h4>

                {this.props.data.artists.items.map(function(artist) {
                    return <ArtistCard key={artist.id}  artist={artist}/>;
                })}
            </div>
        );
    }
}

