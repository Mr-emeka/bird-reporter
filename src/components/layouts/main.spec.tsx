import {render, screen} from "@testing-library/react";
import Main from "./main"

describe("Main", () => {
  test("main layout ", () => {
    render(<Main/>)
    let iconDiv = screen.getByTestId('aside-icon-container');
    let main = screen.getByTestId('main');
    expect(iconDiv.childNodes.length).toEqual(5)
    expect(main).toBeInTheDocument()
  })
})
