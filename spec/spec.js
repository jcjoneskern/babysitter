var calc = require("../script.js");

describe("calculation", function() {
  it("calculates bedtime @8 for max time", function() {
    expect(calc(17, 20, 4)).toEqual(132);
  });
});
