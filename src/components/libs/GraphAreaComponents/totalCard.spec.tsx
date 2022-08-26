import { render, screen} from "@testing-library/react";
import TotalCard from "./totalCard";


describe("Total Card", ()=>{
  test("total card render ", ()=>{
    render(<TotalCard text={"Total"} amount={"5000"} />)

    const card = screen.getByTestId("total-card");
    const h3 = screen.getByTestId('h3-text')
    expect(card).toBeInTheDocument()
    expect(h3.innerHTML).toEqual("Total | 5000")
  })
})
