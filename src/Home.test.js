import HomeComponent from "./Components/Home";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

// Test that the component renders without crashing
test("renders HomeComponent without crashing", () => {
  render(<HomeComponent />);
});

// Test that the search bar is displayed
test("renders search bar", () => {
  const { getByLabelText } = render(<HomeComponent />);
  const searchBar = getByLabelText("Search items:");
  expect(searchBar).toBeInTheDocument();
});

// Test that the range input is displayed
test("renders range input", () => {
  const { getByLabelText } = render(<HomeComponent />);
  const rangeInput = getByLabelText("Price Range:");
  expect(rangeInput).toBeInTheDocument();
});

// Test that the sorting dropdown is displayed
test("renders sorting dropdown", () => {
  const { getByLabelText } = render(<HomeComponent />);
  const sortingDropdown = getByLabelText("Sorting Options:");
  expect(sortingDropdown).toBeInTheDocument();
});

// Test that the items are displayed
test("renders items", () => {
  const { getByTestId } = render(<HomeComponent />);
  const items = getByTestId("items");
  expect(items).toBeInTheDocument();
});

// Test that the search bar filters the items correctly
test("filters items by search query", () => {
  const { getByLabelText, getByTestId } = render(<HomeComponent />);
  const searchBar = getByLabelText("Search items:");
  const items = getByTestId("items");
  fireEvent.change(searchBar, { target: { value: "The Alchemist" } });
  expect(items.children.length).toBe(1);
});

// Test that the range input filters the items correctly
test("filters items by price range", () => {
  const { getByLabelText, getByTestId } = render(<HomeComponent />);
  const rangeInput = getByLabelText("Price Range:");
  const items = getByTestId("items");
  fireEvent.change(rangeInput, { target: { value: "13" } });
  expect(items.children.length).toBe(2);
});

//  Test that the sort function works properly
test("sorts items by price", () => {
  const { getByLabelText, getByTestId } = render(<HomeComponent />);
  const sortingDropdown = getByLabelText("Sorting Options:");
  const items = getByTestId("items");
  fireEvent.change(sortingDropdown, {
    target: { value: "price from lowest to highest" },
  });
  expect(
    items.children[0].children[0].children[0].children[3].textContent
  ).toBe("Price: $10.99");
  expect(
    items.children[3].children[0].children[0].children[3].textContent
  ).toBe("Price: $19.99");
});
