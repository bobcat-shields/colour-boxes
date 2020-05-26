import React from 'react';
import './App.css';
import Square from './Square.js';

class App extends React.Component {
  render() {
    let squareNo = 25
    let grid = []

    while (squareNo > 0) {
      grid.push(<Square/>)
      squareNo -= 1
    }

    return (
      grid
    );
  }
}

export default App;