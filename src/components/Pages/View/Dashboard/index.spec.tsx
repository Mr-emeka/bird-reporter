import {render, screen} from "@testing-library/react";
import Dashboard from "./index";


describe("Dashboard", () => {
  test("Dashboard ", () => {
    render(<Dashboard/>)
    const h3 = screen.getByText('No reports');
    const p = screen.getByTestId('message')
    const svg = screen.getByTestId('no-report-svg');

    expect(h3).toBeInTheDocument()
    expect(p).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
