import { test, expect } from "bun:test";
import { stripZeros } from "./helpers";

test("strip zeros", () => {
  expect(stripZeros("340")).toBe("340");
  expect(stripZeros("34.02")).toBe("34.02");
  expect(stripZeros("34.020")).toBe("34.02");
  expect(stripZeros("34.00")).toBe("34");
  expect(stripZeros("34.10")).toBe("34.1");
  expect(stripZeros("0.02")).toBe("0.02");
  expect(stripZeros("0.00")).toBe("0");
  expect(stripZeros("-0.02")).toBe("-0.02");
  expect(stripZeros("-0.00")).toBe("-0");
  expect(stripZeros("0")).toBe("0");
  expect(stripZeros("-0")).toBe("-0");
  expect(stripZeros("abc0")).toBe("abc0");
  expect(stripZeros("abc70")).toBe("abc70");
  expect(stripZeros("abc7.0")).toBe("abc7");
  expect(stripZeros("")).toBe("");
});
