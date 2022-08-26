import { render, screen} from "@testing-library/react";
import Breakdown from "./breakdown";


describe("Breakdown", ()=>{
  test("Breakdown  render ", ()=>{
    render( <Breakdown data={[{value: "Project 1", color: '#FFC107'}, {value: "Project 2", color: '#6497B1'}]}/>)
    const project1 = screen.getByText("Project 1");
    expect(project1).toBeInTheDocument()
  })
})
