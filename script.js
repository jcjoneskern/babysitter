module.exports = calc;

//uses military time
//assumes bedtime will always be before midnight
function calc(start, bed, leave) {
  var pay;
  var wage = 12; //in 2 of 3 scenarios, wage starts at 12--saves a line

  //conversion in case end time is entered as 0000 rather than 2400
  if(leave == 0) {
    leave = 2400;
  }

  if (bed > leave && leave > 500) { //if babysitter leaves before bedtime
    pay = (Math.ceil((leave - start)/100))*wage;
  } else if (start > bed) { //if babysitter arrives after bedtime
    wage = 8;
    if(leave >= 0 && leave <= 400) {
      pay = (Math.ceil(24 - (start/100)))*wage;
    } else {
      pay += (Math.ceil((leave - start)/100))*wage;
    }
    //midnight to end
    wage = 16;
    if(leave > 0 && leave <= 400) {
      pay += Math.ceil(leave/100)*wage;
    }
  } else { //the most generic situation
    //start to bedtime
    pay = (Math.ceil((bed - start)/100))*wage;
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
  }
  return pay;
}
// Logic/potential scenarios:
// Expected scenario: sitter arrives before bedtime and leaves after midnight
// Other possible scenarios:
// --sitter leaves before bedtime
// --sitter leaves before midnight
// --sitter arrives after bedtime
