import { render, screen } from "@testing-library/react";
import Button from ".";
import ButtonState from "./types/ButtonState";

test("renders button", () => {
  render(
    <Button variant={ButtonState.PRIMARY} padding="5px 10px">
      Button
    </Button>
  );
  const label = screen.getByText("Button");
  expect(label).toBeInTheDocument();
});
