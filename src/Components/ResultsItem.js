import React, { Component } from 'react';
// import css

class ResultsItem extends Component {
  render() { 
    const { 
      key, image, title, author, price, description
     } = this.props;
    return (
      <div className="ResultsItem" id={key}>
        <img src={image} />
        <h2>{title}</h2>
        <p>
          {author}
          <br/>
          {price}</p>
        <p>{description}</p>
      </div>
    );
  }
}
 
export default ResultsItem;


///const resultsList = results.map((item, key) => {
///  return (
///    <div className="ResultsItem" id={key}>
///      <img src={item.volumeInfo.imageLinks.thumbnail} />
///      <h2>{item.volumeInfo.title}</h2>
///      <p>
///        Author: {item.volumeInfo.authors[0]}
///        <br/>
///        Price: ${item.saleInfo.listPrice.amount}</p>
///      <p>{item.volumeInfo.description}</p>
///    </div>
///    );
///  })