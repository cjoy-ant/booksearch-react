import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

class ResultsList extends Component {
  checkPrice(item) {
    let price = ''
    if (item.saleInfo.listPrice === undefined) {
      price = ''
    } else {
      price = '$' + item.saleInfo.listPrice.amount
    }
    return price
  }

  checkAuthor(item) {
    let author = ''
    if (item.volumeInfo.authors === undefined) {
      author = ''
    } else {
      author = 'Author: ' + item.volumeInfo.authors[0]
    }
    return author
  }

  checkDescription(item){
    const description = item.volumeInfo.description
    let newDescription = ''
    if (description !== undefined) {
      newDescription = description.substring(0, 250) + '...'
    } else {
      newDescription = "No description currently available for this book."
    } return newDescription
  }
    
  render() { 
    const { results } = this.props;
    const resultsList = results.map((item, key) => 
      <ResultsItem 
        key={key}
        image={item.volumeInfo.imageLinks.thumbnail}
        title={item.volumeInfo.title}
        author={this.checkAuthor(item)}
        price={this.checkPrice(item)}
        description={this.checkDescription(item)} />
    );

    return (
      <div className="ResultsList">
        {resultsList}
      </div>  
    );
  }
}
 
export default ResultsList;

//const resultsList = results.map((item, key) => {
//  return (
//    <div className="ResultsItem" id={key}>
//      <img src={item.volumeInfo.imageLinks.thumbnail} />
//      <h2>{item.volumeInfo.title}</h2>
//      <p>
//        Author: {item.volumeInfo.authors[0]}
//        <br/>
//        Price: ${item.saleInfo.listPrice.amount}</p>
//      <p>{item.volumeInfo.description}</p>
//    </div>
//    );
//  })