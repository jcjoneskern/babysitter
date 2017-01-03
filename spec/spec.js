var calc = require("../script.js");

describe("calculation", function() {
  it("calculates bedtime @8 for max time", function() {
    expect(calc(17, 20, 4)).toEqual(132);
  });
  it("rounds to full hours", function() {
    expect(calc(17.5, 20, 3.5)).toEqual(132);
  });
});
