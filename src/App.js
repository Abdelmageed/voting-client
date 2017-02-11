import React, { Component } from 'react';
import './App.css';
import Voting from './voting';

const pair = ['Trainspotting', '28 Days Later'];
class App extends Component {
  render() {
    return (
        <Voting pair={pair} />
    )
  }
}

export default App;
