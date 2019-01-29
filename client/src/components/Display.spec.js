import React from "react";
import { render, getByTestId } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display/>", () => {
  it("should render the display component", () => {
    const testState = {
      player: "player1",
      balls: 0,
      strikes: 0
    };
    const { getByTestId } = render(<Display atBat={testState} />);
    const player = getByTestId(/player/i);
    const balls = getByTestId(/balls/i);
    const strikes = getByTestId(/strikes/i);
    expect(player).toHaveTextContent(/player1/i);
    expect(balls).toHaveTextContent(/0/i);
    expect(strikes).toHaveTextContent(/Strikes/i);
  });
});
