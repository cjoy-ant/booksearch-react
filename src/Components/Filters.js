import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  render() { 
    return ( 
      <div className="Filters">
        <label htmlFor="PrintTypeFilter">Print Type: </label>
          <select id="PrintTypeFilter"></select>
        <label htmlFor="BookTypeFilter">Book Type: </label>
          <select id="BookTypeFilter"></select>
      </div>
     );
  }
}
 
export default Filters;