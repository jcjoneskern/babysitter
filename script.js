module.exports = calc;

//uses military time
//assumes bedtime will always be before midnight
function calc(start, bed, leave) {
  var pay = 0;
  var wage = 0;

  if(leave == 0) {
    leave = 2400;
  }

  //start to bedtime
  wage = 12;
  pay += (Math.ceil((bed - start)/100))*wage;
  //bedtime to midnight
  wage = 8;
  if(leave >= 0 && leave <= 400) {
    pay += (Math.ceil(24 - (bed/100)))*wage;
  } else {
    pay += (Math.ceil((leave - bed)/100))*wage;
  }
  //midnight to end
  wage = 16;
  if(leave > 0 && leave <= 400) { //leaving after midnight
    pay += Math.ceil(leave/100)*wage;
  } //shouldn't add anything else if babysitter leaves before midnight
  return pay;
}

//is it possible fore this to handle leaving before bedtime?

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
