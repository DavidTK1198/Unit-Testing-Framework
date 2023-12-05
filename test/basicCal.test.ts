import { add, sub,mul,div } from "../src/basicCal";

describe("Test add function", () => {
  it("add(5,5) should return 10", () => {
    expect(add(5, 5)).toBe(10);
  });
});

describe("Test sub function", () => {
  it("sub(4,3) should return 1 ", () => {
    expect(sub(4, 3)).toBe(1);
  });
});

describe("Test mul function", () => {
  it("mul(4,5) should return 20", () => {
    expect(mul(4, 5)).toBe(20);
  });
});

describe("Test div function", () => {
  it("div(15,3) should return 5", () => {
    expect(div(15, 3)).toBe(5);
  });
});