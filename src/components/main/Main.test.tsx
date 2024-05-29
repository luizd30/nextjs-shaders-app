import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Main } from "./Main";
import "@testing-library/jest-dom";

describe("Main Component", () => {
  it("Should render children correctly.", () => {
    const { getByText } = render(
      <Main>
        <div>Child Component</div>
      </Main>
    );
    expect(getByText("Child Component")).toBeInTheDocument();
  });
});
