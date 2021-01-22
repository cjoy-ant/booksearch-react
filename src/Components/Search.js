import React, { Component } from 'react';
import './Search.css';
import ResultsList from './ResultsList';
//import SearchTerm from './SearchTerm';
//import Filters from './Filters';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      results: []
    }
  }

  searchTermChanged(searchTerm){
    this.setState({
      searchTerm
    });
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(key => 
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }

  handleSubmit(e){
    e.preventDefault();
    const baseURL = 'https://www.googleapis.com/books/v1/volumes';
    const params = {
      key: 'AIzaSyDUKowM02Lgu_N3GsnH7cpTOnE2PzGk6Pc',
      q: this.state.searchTerm,
    }
    //const options = {
    //  method: 'GET',
    //  headers: {
    //    "Authorization": 'AIzaSyDUKowM02Lgu_N3GsnH7cpTOnE2PzGk6Pc';
    //  }
    //}
    const queryString = '?' + this.formatQueryParams(params)
    const url = baseURL + queryString
    console.log(url)
    
    fetch(url)
      .then(response => {
          if(!response.ok) {
            throw new Error ('Something went wrong, please try again later.')
          }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        //const books = Object.keys(data)
        this.setState({
          results: data.items
        });
      })
      .catch(err => {
        this.setState ({
          error: err.message
        });
      });

  }

  //printTypeChanged(printType) {
  //  this.setState({
  //    printType
  //  });
  //}
  //
  //bookTypeChanged(bookType) {
  //  this.setState({
  //    bookType
  //  });
  //}

  render() { 
    const results = <ResultsList 
                      results={this.state.results} />
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";

    return ( 
      <div className="Search">
        <form className="Search" onSubmit={e => this.handleSubmit(e)}>
            <div className="SearchTerm">
              <label htmlFor="SearchTerm">Search: </label>
                <input 
                  type="text" 
                  id="SearchTerm" 
                  placeholder="Enter a search term..." 
                  onChange={e => this.searchTermChanged(e.target.value)} />
                <button 
                  type="submit">Search</button>
            </div>
            { error }
            { results }
        </form>
      </div>
    );
  }
}
 
export default Search;