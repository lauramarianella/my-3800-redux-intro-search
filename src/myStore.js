import { createStore } from 'redux'; // 1
let reducer = (state, action) => {};

const myStore = createStore(
  reducer,
  { searchQuery: '', min: 0, max: 100000 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore;
