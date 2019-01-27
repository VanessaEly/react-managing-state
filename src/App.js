import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './GameDashboard';

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  }
  calculateScore = isCorrect => {
    this.setState(currentState => ({
      numQuestions: currentState.numQuestions + 1,
      numCorrect: isCorrect ? currentState.numCorrect + 1 : currentState.numCorrect,
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game setScore={this.calculateScore}/>
		      <p className="text">
          	Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
