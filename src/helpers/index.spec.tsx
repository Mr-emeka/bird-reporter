import {isElement, selectedProject,selectedGateway} from "./index";


describe("helpers", () => {
  test("isElement to be truthy", () => {
    let element = <h1></h1>;

    expect(isElement(element)).toEqual(true)
  })
  test("isElement to be false", () => {
    let element = "<h1></h1>";

    expect(isElement(element)).toEqual(false)
  })
  test("selected project function works", () => {
    let projects = [{name: 'Aimes', projectId: '123'}, {name: 'David', projectId: '131'}]
    let selectedId = "123"
    expect(selectedProject(projects, selectedId)).toEqual("Aimes")
  })
  test("selected project function fails", () => {
    let projects = [{name: 'Aimes', projectId: '123'}, {name: 'David', projectId: '131'}]
    let selectedId = "13"
    expect(selectedProject(projects, selectedId)).toEqual(undefined)
  })
  test("selected gateway function works", () => {
    let projects = [{name: 'Aimes', gatewayId: '123'}, {name: 'David', gatewayId: '131'}]
    let selectedId = "123"
    expect(selectedGateway(projects, selectedId)).toEqual("Aimes")
  })
  test("selected gatway function fails", () => {
    let projects = [{name: 'Aimes', gatewayId: '123'}, {name: 'David', gatewayId: '131'}]
    let selectedId = "13"
    expect(selectedGateway(projects, selectedId)).toEqual(undefined)
  })
})
