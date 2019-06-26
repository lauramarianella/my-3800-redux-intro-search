import { createStore } from 'redux';

let reducer = (state, action) => {
  if (action.type === 'type_inpTxtQuery') {
    let newObj = { ...state, stateQuery: action.value };
    //console.log(newObj);
    return newObj;
  }

  if (action.type === 'type_inpTxtMinPrice') {
    let price = 0;
    if (action.value === '') price = 0;
    isNaN(action.value) ? (price = 0) : (price = parseInt(action.value));
    return { ...state, stateMinPrice: price };
  }

  if (action.type === 'type_inpTxtMaxPrice') {
    let price = 0;
    if (action.value === '') price = 0;
    isNaN(action.value) ? (price = 0) : (price = parseInt(action.value));
    return { ...state, stateMaxPrice: price };
  }

  if (action.type === 'inStockChecked') {
    //alert(action.value);
    let newObj = { ...state, stateInStock: action.value };
    //console.log(newObj);
    return newObj;
  }

  return state;
};

const store = createStore(
  reducer,
  {
    stateQuery: '',
    stateMinPrice: 0,
    stateMaxPrice: 100000,
    stateInStock: true,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
