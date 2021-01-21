import React, { Component } from 'react';
import './SearchTerm.css';

class SearchTerm extends Component {
  render() { 
    return ( 
      <div className="NameSearch">
        <label htmlFor="NameSearch">Search: </label>
          <input type="text" id="NameSearch" placeholder="Enter a search term..." />
          <button type="submit">Search</button>
      </div>
    );
  }
}
 
export default SearchTerm;