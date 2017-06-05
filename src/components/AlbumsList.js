import React, {Component} from 'react';
import AlbumCard from '../components/AlbumCard';

export default class AlbumsList extends Component {

//render the AlbumsList total and AlbumsList components

    render() {
        console.log(this.props.data)
        return (
            <div className="list-group">
                <h4>{this.props.data.albums.total} results found</h4>
                {this.props.data.albums.items.map(function(album) {
                    return <AlbumCard key={album.id}  album={album}/>;
                })}
            </div>
        );
    }
}

