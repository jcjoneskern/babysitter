module.exports = calc;

//uses military time
function calc(start, bed, leave) {
  var pay = 0;
  var wage = 0;

  function beginning() {
    wage = 12;
    pay += (bed - start)*wage;
    return pay;
  }

  function middle() {
    wage = 8;
    pay += (24 - bed)*wage;
    return pay;
  }

  function end() {
    wage = 16;
    pay += leave*wage;
    return pay;
  }

  beginning();
  middle();
  end();
  return pay;
}

// The babysitter
// - starts no earlier than 5:00PM
// - leaves no later than 4:00AM
// - gets paid $12/hour from start-time to bedtime
// - gets paid $8/hour from bedtime to midnight
// - gets paid $16/hour from midnight to end of job
// - gets paid for full hours (no fractional hours)
// (assuming this last one means always round up )
//
// Feature:
// As a babysitter
// In order to get paid for 1 night of work
// I want to calculate my nightly charge
