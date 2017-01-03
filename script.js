module.exports = calc;

//uses military time
function calc(start, bed, leave) {
  var pay = 0;
  var wage = 0;
  start = Math.floor(start);
  bed = Math.floor(bed);
  leave = Math.ceil(leave);

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


//assumption: always round down--ex: 8:15, 8:30, and 8:45 should all be 8
//bedtime will always be before midnight
//TODO: one function rather than 3
//rounding
//errors
//time conversion?



// The babysitter
// - starts no earlier than 5:00PM
// - leaves no later than 4:00AM
// - gets paid $12/hour from start-time to bedtime
// - gets paid $8/hour from bedtime to midnight
// - gets paid $16/hour from midnight to end of job
// - gets paid for full hours (no fractional hours)
//
// Feature:
// As a babysitter
// In order to get paid for 1 night of work
// I want to calculate my nightly charge
