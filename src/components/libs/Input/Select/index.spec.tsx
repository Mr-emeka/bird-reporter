import {fireEvent,render, screen } from "@testing-library/react";
import Select from ".";
let option = [{text: '1', value:'223213'}]

describe("renders select", () => {
  test("renders input properly", () => {
    let mockHandleChangeFn = jest.fn();
    render(
      <Select type={"text"} value={"aimes"} handleChange={mockHandleChangeFn} name={"name"} options={option}/>
    );
    expect(screen.getByTestId("select")).toHaveValue('')
  });
  test("fire event works", async() => {
    let mockHandleChangeFn = jest.fn();
    render(
      <Select type={"text"} value={"aimes"} onChange={mockHandleChangeFn} name={"name"} options={option}/>
    );
    const dropdown = screen.getByTestId('select') as HTMLSelectElement;
    expect(dropdown.value).toEqual('');
    fireEvent.change(dropdown, { target: { value: '223213' }});
    expect(dropdown.children.length).toEqual(2);
  });
})


