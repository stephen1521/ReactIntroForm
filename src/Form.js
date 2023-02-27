import React, { Component } from 'react';
const date = new Date();

class Form extends Component {
    constructor(props) {
        super(props);
        this.intialState = {
            title:'',
            actors:[],
            plot:'',
            genre:[],
            imdbRating:'',
            director:'',
            year:'',
            dateAdded: String(date)
        }
        this.state = this.intialState;
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state);
        this.setState(this.intialState);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        const {title, 
            actors, 
            plot, 
            genre,
            imdbRating, 
            director, 
            year, 
            } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title:</label><br/>
                <input type='text'
                        id='title'
                        name='title'
                        value={title}
                        onChange={this.handleChange}/><br/>
                <label htmlFor="actors">Actors:</label><br/>
                <input type='Array'
                        id='actors'
                        name='actors'
                        value={actors}
                        onChange={this.handleChange}/><br/>
                <label htmlFor="Plot">Plot:</label><br/>
                <input type='text'
                        id='plot'
                        name='plot'
                        value={plot}
                        onChange={this.handleChange}/><br/>
                <label htmlFor="genre">Genre:</label><br/>
                <input type='Array'
                        id='genre'
                        name='genre'
                        value={genre}
                        onChange={this.handleChange}/><br/>
                <label htmlFor="imdbRating">imdbRating:</label><br/>
                <input type='text'
                        id='imdbRating'
                        name='imdbRating'
                        value={imdbRating}
                        onChange={this.handleChange}/><br/>
                <label htmlFor="director">Director:</label><br/>
                <input type='text'
                        id='director'
                        name='director'
                        value={director}
                        onChange={this.handleChange}/><br/>
                <label htmlFor="year">Year:</label><br/>
                <input type='text'
                        id='year'
                        name='year'
                        value={year}
                        onChange={this.handleChange}/><br/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;