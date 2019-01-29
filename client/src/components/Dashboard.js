import React, { Component } from "react";
const Dashboard = props => {
  return (
    <div>
      <button data-testid="strike" onClick={props.strike}>
        strike
      </button>
      <button data-testid="ball" onClick={props.ball}>
        ball
      </button>
      <button data-testid="foul" onClick={props.foul}>
        foul
      </button>
      <button data-testid="hit" onClick={props.hit}>
        hit
      </button>
    </div>
  );
};

export default Dashboard;
