module.exports = generic;

function generic(start, bed, leave) {
  if(leave == 0) {
    leave = 2400;
  }

  var wage = 12;
  var pay = (Math.ceil((bed - start)/100))*wage;
  wage = 8;
  if(leave >= 0 && leave <= 400) {
    pay += (Math.ceil(24 - (bed/100)))*wage;
  } else {
    pay += (Math.ceil((leave - bed)/100))*wage;
  }
  wage = 16;
  if(leave > 0 && leave <= 400) {
    pay += Math.ceil(leave/100)*wage;
  }
  return pay;
}
