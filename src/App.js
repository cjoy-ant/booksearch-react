import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Search from './Components/Search';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <Header />
        <Search />
      </div> 
      );
  }
}

export default App;
