import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Card from './components/card/card';
import Datatable from './components/table/table';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        column1: '123',
        column2: 'Alfa',
        column3: 'text 1'
      }, {
        column1: '456',
        column2: 'Beta',
        column3: 'text 2'
      }, {
        column1: '789',
        column2: 'Delta',
        column3: 'text 3'
      }, {
        column1: '012',
        column2: 'Gamma',
        column3: 'text 4'
      }]
    }
 }
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Sidebar /> */}
        <Card />
        <Datatable data={this.state.data} />
      </div>
    );
  }
}

export default App;
