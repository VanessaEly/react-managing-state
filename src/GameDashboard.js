import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    // creating state property with the object that is returned from makeNewQuestion function
    this.state = this.makeNewQuestion();
  }
  makeNewQuestion = () => {
    const values = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    return {
      value1: values[0],
    	value2: values[1],
    	value3: values[2],
    	proposedAnswer: Math.floor(Math.random() * 3) + (values[0] + values[1] + values[2]),
  	};
  };
  updateDashboard = answer => {
    const sum = this.state.value1 + this.state.value2 + this.state.value3;
    // checking if the answer the user clicked is correct
    const answerIsCorrect = answer === (sum === this.state.proposedAnswer);
    // calling parent component method 'setScore', which is responsible for updating the
    // user score considering if the answer was correct or not
    this.props.setScore(answerIsCorrect);
    // updating the state using the object returned from makeNewQuestion function
    this.setState(currState => (this.makeNewQuestion()));
  }
  render() {
    return (
      <div>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.updateDashboard(true)}>True</button>
        <button onClick={() => this.updateDashboard(false)}>False</button>
	    </div>
    );
  }
}

export default Game;