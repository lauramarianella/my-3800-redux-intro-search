import React, { Component } from 'react';
import { connect } from 'react-redux';
import { items } from './myData.js'; //I DIDNOT IMPORT ITEMS... INSTEAD DATA...

class UnconnectedMySearchResults extends Component {
  render() {
    let results;

    if (this.props.propInStock) {
      results = items.filter((item) => {
        return (
          item.name.includes(this.props.propQuery) &&
          item.price >= this.props.propMinPrice &&
          item.price <= this.props.propMaxPrice &&
          item.inStock === true
        );
      });
    } else {
      results = items.filter((item) => {
        return (
          item.name.includes(this.props.propQuery) &&
          item.price >= this.props.propMinPrice &&
          item.price <= this.props.propMaxPrice
        );
      });
    }
    return (
      <div>
        <h1>{this.props.tittle}:</h1>
        {results.map((result) => {
          return (
            <div>
              {result.name}-${result.price}
            </div>
          );
        })}
      </div>
    );
  }
}
let mapStateToProps = (st) => {
  return {
    propQuery: st.stateQuery,
    propMinPrice: st.stateMinPrice,
    propMaxPrice: st.stateMaxPrice,
    propInStock: st.stateInStock,
  };
};

let MySearchResults = connect(mapStateToProps)(UnconnectedMySearchResults);

export default MySearchResults;
