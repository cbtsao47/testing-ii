import React from "react";
import { render, getAllByTestId } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display/>", () => {
  it("should render the display component", () => {
    const { getByTestId } = render(<Display />);
    const player = getByTestId(/player/i);
    const balls = getByTestId(/balls/i);
    const strikes = getByTestId(/strikes/i);
    // console.log(player);
    expect(player).toHaveTextContent(/player1/i);
    expect(balls).toHaveTextContent(/3/i);
    expect(strikes).toHaveTextContent(/2/i);
  });
});
