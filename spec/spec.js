var generic = require("../generic.js");
var diff = require("../unusual.js");

describe("calculation", function() {
  it("calculates bedtime @8 for max time", function() {
    expect(generic(1700, 2000, 400)).toEqual(132);
  });
  it("rounds to full hours", function() {
    expect(generic(1730, 2030, 330)).toEqual(132);
  });
  it("rounds to full hours even if the minutes are weird", function() {
    expect(generic(1755, 2045, 339)).toEqual(132);
  });
  it("handles leaving before midnight", function() {
    expect(generic(1730, 2030, 2200)).toEqual(52);
  });
  it("handles leaving at midnight && midnight is 0", function() {
    expect(generic(1730, 2030, 0)).toEqual(68);
  });
  it("handles leaving at midnight && midnight is 24", function() {
    expect(generic(1730, 2030, 2400)).toEqual(68);
  });
  it("handles bedtime being before babysitter leaves", function() {
    expect(diff(1730, 2100, 2000)).toEqual(36);
  });
  it("handles babysitter arriving after bedtime", function() {
    expect(diff(2100, 2000, 200)).toEqual(56);
  });
  it("handles babysitter arriving after bedtime && leaving before midnight", function() {
    expect(diff(2100, 2000, 2300)).toEqual(16);
  });
  it("handles babysitter leaving at bedtime", function() {
    expect(generic(1700, 2100, 2100)).toEqual(48);
  });
  it("handles babysitter leaving close to bedtime", function() {
    expect(generic(1700, 2100, 2115)).toEqual(56);
  });
});
