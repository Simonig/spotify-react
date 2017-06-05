import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);

    }

    handleSubmitButton(event) {
        event.preventDefault();

        //Get the text value from the input
        const textInputValue = this.refs.input.value;

        //get the filter value from the input
        const filter = this.filter.value;

        // Submit the input value and filter selection to the parent component
        this.props.handleSubmitButton(textInputValue, filter);
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <h2>Start searching</h2>
                            <form onSubmit={this.handleSubmitButton}>
                                <div className="col-md-6 col-md-offset-3">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Filter by:</ControlLabel>
                                        <FormControl inputRef={ref => {
                                            this.filter = ref;
                                        }} componentClass="select" placeholder="Filter Search">
                                            <option value="artists">Artists</option>
                                            <option value="albums">Albums</option>
                                        </FormControl>
                                    </FormGroup>
                                    <div className="input-group input-group-lg">
                                        <input ref="input" type="text" className="form-control"
                                               placeholder="Example Bob Marley"/>
                                        <span className="input-group-btn">


                      <button className="btn btn-default" type="submit">Search</button>
                    </span>
                                    </div>
                                </div>
                            </form>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}