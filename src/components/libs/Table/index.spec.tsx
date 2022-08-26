import {render, screen} from "@testing-library/react";
import Table from ".";
import {dashboardTableCol} from "./data";


describe("renders table", () => {
  test("renders table properly", () => {
    let data = [{key: 1, created: '2022/01/01', gateway: 'Aimes', paymentId: '12321312', amount: 1000}]
    render(
      <Table
        columns={dashboardTableCol}
        dataSource={data}
        evenStyled={true}
      />
    );
    let tbody = screen.getByTestId("table-body");
    let thead = screen.getByTestId("table-head-tr")
    expect(tbody.childNodes.length).toEqual(1)
    expect(thead.childNodes.length).toEqual(4)
    expect(tbody).toBeInTheDocument()
    expect(thead).toBeInTheDocument()
  });
  test("table with thead with empty column", () => {
    let data = [{key: 1, created: '2022/01/01', gateway: 'Aimes', paymentId: '12321312', amount: 1000}]
    render(
      <Table
        columns={[]}
        dataSource={data}
        evenStyled={true}
      />
    );
    let thead = screen.getByTestId("table-head-tr")
    expect(thead.childNodes.length).toEqual(0)
  })
  test("table with tbody with empty []", () => {
    let data: any = []
    render(
      <Table
        columns={[]}
        dataSource={data}
        evenStyled={true}
      />
    );
    let tbody = screen.getByTestId("table-body")
    expect(tbody.childNodes.length).toEqual(0)
  })
  test("render element if data is element", () => {
    let data = [{key: 1, created: '2022/01/01', gateway: <h4>Aimes</h4>, paymentId: '12321312', amount: 1000}]
    render(
      <Table
        columns={dashboardTableCol}
        dataSource={data}
        evenStyled={true}
      />
    );
    let tr =screen.getByTestId("table-body-tr");
    expect(tr.getElementsByTagName('td').length).toEqual(4);
    expect(tr.childNodes[1].firstChild).toContainHTML('<h4>Aimes</h4>')
  })
})


