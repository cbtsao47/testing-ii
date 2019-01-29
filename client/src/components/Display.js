import React, { Component } from "react";

class Display extends Component {
  state = {
    player: "player1",
    balls: 3,
    strikes: 2
  };
  handleReset = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };
  render() {
    return (
      <>
        <h2 data-testid="player">At-bat:{this.state.player}</h2>
        <h2 data-testid="balls">Balls:{this.state.balls}</h2>
        <h2 data-testid="strikes">Strikes:{this.state.strikes}</h2>
      </>
    );
  }
}

export default Display;
