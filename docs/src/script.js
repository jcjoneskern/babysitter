function calc(start, bed, leave) {
  var pay;
  var wage = 12;
  if(leave == 0) {
    leave = 2400;
  }
  if (bed > leave && leave > 500) {
    pay = (Math.ceil((leave - start)/100))*wage;
  } else if (start > bed) {
    wage = 8;
    if(leave >= 0 && leave <= 400) {
      pay = (Math.ceil(24 - (start/100)))*wage;
    } else {
      pay = (Math.ceil((leave - start)/100))*wage;
    }
    wage = 16;
    if(leave > 0 && leave <= 400) {
      pay += Math.ceil(leave/100)*wage;
    }
  } else {
    pay = (Math.ceil((bed - start)/100))*wage;
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
  }
  return pay;
}
