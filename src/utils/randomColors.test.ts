import { describe, it, expect } from "vitest";
import { randomColor } from "./randomColors";

describe("randomColor", () => {
  it("Must return true if it is a valid color.", () => {
    const regexp = /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    const hexColor = randomColor();
    const isValid = regexp.test(hexColor);
    expect(isValid).toBe(true);
  });
});
