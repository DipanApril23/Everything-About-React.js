//This is the Unit Testing class for Contact Us page.
//We are testing here our Contact Us page component.

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  // Here we testing our heading there or not.
  it("should load Contact us componet", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  // Here we testing our button there or not.
  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  // Here we testing load input name inside Contact component or not.
  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  // Here we testing should load 2 input fields inside Contact component or not.
  test("Should load 2 input fields inside Contact component", () => {
    render(<Contact />);

    //Querying
    const inputFields = screen.getAllByRole("textbox");

    //Assertion
    expect(inputFields.length).toBe(3);
  });
});
