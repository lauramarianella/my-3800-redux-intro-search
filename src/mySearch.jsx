import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedMySearch extends Component {
  onChangeHandlerText = (ev) => {
    // onChangeHandler(ev) {}does not work, cannot find this
    //NOt enymore... this.setState({ [ev.target.name]: ev.target.value });
    //alert([ev.target.name]);
    this.props.dispatch({
      type: 'type_' + [ev.target.name], //'inpTxtQuery'...
      value: ev.target.value, //[ev.target.name]: ev.target.value, //inpTxtQuery...
    });
  };

  onChangeHandlerNumber = (ev) => {
    // onChangeHandler(ev) {}does not work, cannot find this
    //NOt enymore... this.setState({ [ev.target.name]: ev.target.value });
    //alert([ev.target.name]);
    this.props.dispatch({
      type: 'type_' + [ev.target.name], //'inpTxtQuery'...
      value: parseInt(ev.target.value), //[ev.target.name]: ev.target.value, //inpTxtQuery...
    });
  };

  onClickChkBoxHandler = (ev) => {
    //alert(ev.target.checked);
    this.props.dispatch({
      type: 'inStockChecked',
      value: ev.target.checked,
    });
  };
  onClickHandlerClearAll = (ev) => {
    this.props.dispatch({ type: 'clearAll' });
  };

  render() {
    return (
      <div>
        <form>
          <h1>{this.props.tittle}:</h1>
          <div>
            Search query:
            <input
              type="text"
              onChange={this.onChangeHandlerText}
              placeholder="query"
              name="inpTxtQuery"
              value={this.props.propQuery}
            />
          </div>
          <div>
            Min price:
            <input
              type="text"
              onChange={this.onChangeHandlerNumber}
              placeholder="min price"
              name="inpTxtMinPrice"
              value={this.props.propMinPrice}
            />
          </div>
          <div>
            Max price:
            <input
              type="text"
              onChange={this.onChangeHandlerNumber}
              placeholder="max price"
              name="inpTxtMaxPrice"
              value={this.props.propMaxPrice}
            />
          </div>
          <div>
            In Stock:
            <input
              type="checkbox"
              onChange={this.onClickChkBoxHandler}
              name="inpChkBoxInStock"
              checked={this.props.propInStock}
            />
          </div>
          <div>
            <h3>State query: {this.props.propQuery}</h3>
          </div>
          <div>
            <h3>State Min Price: {this.props.propMinPrice}</h3>
          </div>
          <div>
            <h3>State Max Price: {this.props.propMaxPrice}</h3>
          </div>
          <div>
            <h3>State In Stock: {this.props.propInStock + ''}</h3>
          </div>
        </form>
        <input
          type="button"
          value="Clear all"
          onClick={this.onClickHandlerClearAll}
        />
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
let MySearch = connect(mapStateToProps)(UnconnectedMySearch);
export default MySearch;
