import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.intialState = {
            selectedOption: 'title',
            searchTerm: ''
        }
        this.state = this.intialState;
    }

    handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        this.props.searchTable(this.state);
        this.setState(this.intialState);
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        })
    }

    handleSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    render(){
        const { searchTerm } = this.state;
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type='text'
                        placeholder='Search'
                        value={searchTerm}
                        name='searchTerm'
                        onChange={this.handleSearch}/><br/>
                    <label>Search Fields:</label>
                    <label>
                    <input type="radio" value="title" 
                              checked={this.state.selectedOption === 'title'} 
                              onChange={this.handleOptionChange} />
                        Title
                    </label>
                    <label>
                        <input type="radio" value="actor" 
                            checked={this.state.selectedOption === 'actor'} 
                            onChange={this.handleOptionChange} />
                        Actor
                    </label>
                    <label>
                        <input type="radio" value="director" 
                            checked={this.state.selectedOption === 'director'} 
                            onChange={this.handleOptionChange} />
                        Director
                    </label>
            </form>
        )
    }
}



export default SearchBar;