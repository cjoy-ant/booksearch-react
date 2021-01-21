import React, { Component } from 'react';
import './Search.css';
//import SearchTerm from './SearchTerm';
//import Filters from './Filters';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      printType: '',
      bookType: ''
    }
  }

  searchTermChanged(searchTerm){
    this.setState({
      searchTerm
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  bookTypeChanged(bookType) {
    this.setState({
      bookType
    });
  }

  render() { 
    return ( 
      <div className="Search">
        <form>
            <div className="SearchTerm">
              <label htmlFor="SearchTerm">Search: </label>
                <input 
                  type="text" 
                  id="SearchTerm" 
                  placeholder="Enter a search term..." 
                  onChange={e => this.searchTermChanged(e.target.value)} />
                <button 
                  type="submit"
                  >Search</button>
            </div>
            <div className="Filters">
              <label htmlFor="PrintTypeFilter">Print Type: </label>
                <select id="PrintTypeFilter"></select>
              <label htmlFor="BookTypeFilter">Book Type: </label>
                <select id="BookTypeFilter"></select>
            </div>
        </form>
      </div>
    );
  }
}
 
export default Search;