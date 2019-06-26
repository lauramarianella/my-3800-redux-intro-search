import React, { Component } from 'react';
import MySearch from './mySearch';
import MySearchResults from './mySearchResults';

class MyApp extends Component {
  render() {
    return (
      <div>
        <MySearch tittle="Busqueda" />
        <MySearchResults tittle="Results" />
      </div>
    );
  }
}

export default MyApp;
