var calc = require("../script.js");

describe("calculation", function() {
  it("calculates bedtime @8 for max time", function() {
    expect(calc(1700, 2000, 400)).toEqual(132);
  });
  it("rounds to full hours", function() {
    expect(calc(1730, 2030, 330)).toEqual(132);
  });
});
