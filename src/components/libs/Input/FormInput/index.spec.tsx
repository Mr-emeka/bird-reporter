import {fireEvent, render, screen} from "@testing-library/react";
import FormInput from ".";


describe("renders input", () => {
  test("renders input properly", () => {
    let mockHandleChangeFn = jest.fn();
    render(
      <FormInput type={"text"} value={"aimes"} handleChange={mockHandleChangeFn} name={"name"}/>
    );
    expect(screen.getByTestId("bird-input")).toHaveValue('aimes')
  });
  test("fire event works", async() => {
    let mockHandleChangeFn = jest.fn();
    render(
      <FormInput type={"text"} value={"aimes"} handleChange={mockHandleChangeFn} name={"name"}/>
    );
    let input = screen.getByTestId("bird-input");
    fireEvent.change(input, { target: { value: '123' } })
    expect(mockHandleChangeFn).toHaveBeenCalled();
  });
})


