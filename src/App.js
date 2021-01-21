import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Search from './Components/Search/Search';
//import ResultsList from './Components/Results/ResultsList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  render() { 
    return ( 
      <div className="App">
        <Header />
        <Search 
          title={title}
          printType={printType}
          bookType={bookType} />
      </div> 
      );
  }
}

export default App;
