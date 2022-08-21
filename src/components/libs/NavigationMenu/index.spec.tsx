import { render, screen } from "@testing-library/react";
import NavigationMenu from "./index";

test("renders navigation menu ", () => {
  render(
    <NavigationMenu  name={"John Doe"}/>
  );
  const container = screen.getByTestId("bird-navigation-menu");
  const brandSection = screen.getByTestId("bird-brand-section");
  expect(brandSection.children.length).toEqual(2);
  expect(container.children.length).toBe(2);
  expect(container).toBeInTheDocument();
});
