import React, {Component} from 'react';
import logo from './logo.png'
import SearchBar from './components/SearchBar';
import ArtistsList from './components/ArtistsList';
import AlbumsList from './components/AlbumsList';
import './App.css';
import {searchArtists, searchAlbums} from "./service/SpotifyService";


class App extends Component {


    constructor() {
        super();
        this.state = {
            result: {},
            search: '',
            filter: 'artist',
            message: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
    }


    //Handle the search submited by the SearchBar Component
    handleSearch(query, filter) {
        const m = this;

        if (!query) {

            //If the query is empty shows an alert message requiring the user to input a search
            m.setState({result: [], message: 'Please type a search value.'})

        } else if (filter === 'artists') {

            //if the Filter is set on artists it makes the search to the server
            searchArtists(query).then(function (data) {

                //set a new state with the result of the artists search
                m.setState({
                    result: data.data,
                    search: query,
                    filter: filter
                });
            }, function (err) {

                //if there is an error during the search print a error message
                m.setState({result: [], message: 'Error during the search, please try again later.'})

            });
        } else if (filter === 'albums') {
            searchAlbums(query).then(function (data) {

                //set a new state with the result of the albums search
                m.setState({
                    result: data.data.body,
                    search: query,
                    filter: filter
                });
            }, function (err) {

                //if there is an error during the search print a error message
                m.setState({result: [], message: 'Error during the search, please try again later.'})
            });

        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Spotify Search</h2>
                </div>
                <SearchBar value={this.state.query} handleSubmitButton={this.handleSearch}/>
                <Results message={this.state.message} data={this.state.result} filter={this.state.filter}></Results>
            </div>
        );
    }
}


//Result function render the result from the search based on Artists, Albums or error message
function Results(props) {

    const result = props.data;

    if (props.filter === 'artists' && result.body && result.body.artists) {

        //if the filter is on artists it render the ArtistsList component
        return (<ArtistsList data={result.body}/>)

    } else if (props.filter === 'albums' && result.albums && result.albums.items.length > 0) {

        //if the filter is on Albums it render the AlbumsList component
        return (<AlbumsList data={result}/>)
    } else {
        return (<h1>{props.message}</h1>)
    }


}

export default App;
