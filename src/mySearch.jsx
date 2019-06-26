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

  onClickHandlerAdvancedSearch = (ev) => {
    this.props.dispatch({
      type: 'advancedSearch',
      value: !this.props.propAdvancedSearch,
    });
  };

  render() {
    const advancedSearch = this.props.propAdvancedSearch ? (
      <div>
        <h3>Advanced Search:</h3>
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
      </div>
    ) : (
      <div />
    );

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
          <div>{advancedSearch}</div>
          {/* <div>
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
          <div>
            <h3>Advanced Search: {this.props.propAdvancedSearch + ''}</h3>
          </div> */}
        </form>
        <input
          type="button"
          value="Clear all"
          onClick={this.onClickHandlerClearAll}
        />
        <input
          type="button"
          value="Advanced search"
          onClick={this.onClickHandlerAdvancedSearch}
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
    propAdvancedSearch: st.stateAdvancedSearch,
  };
};
let MySearch = connect(mapStateToProps)(UnconnectedMySearch);
export default MySearch;
