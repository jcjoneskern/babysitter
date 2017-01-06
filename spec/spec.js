var calc = require("../script.js");

describe("calculation", function() {
  it("calculates bedtime @8 for max time", function() {
    expect(calc(1700, 2000, 400)).toEqual(132);
  });
  it("rounds to full hours", function() {
    expect(calc(1730, 2030, 330)).toEqual(132);
  });
  it("rounds to full hours even if the minutes are weird", function() {
    expect(calc(1755, 2045, 339)).toEqual(132);
  });
  it("handles leaving before midnight", function() {
    expect(calc(1730, 2030, 2200)).toEqual(52);
  });
  it("handles leaving at midnight && midnight is 0", function() {
    expect(calc(1730, 2030, 0)).toEqual(68);
  });
  it("handles leaving at midnight && midnight is 24", function() {
    expect(calc(1730, 2030, 2400)).toEqual(68);
  });
  it("handles bedtime being before babysitter leaves", function() {
    expect(calc(1730, 2100, 2000)).toEqual(36);
  });
});
