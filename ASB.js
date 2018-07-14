// Variable Area

let timer = 0;

let armCode = 1234;

let armCode2 = 1234;

/*This is the function to set the timer for the bomb. I hope to eventually add
a fully working timer, but for now i'm concentrating on just getting the basic
time frame settings and having it work when the buttons are pressed.*/

function setTimer() {
  timer = document.getElementById('timer');
  if (timer > 1 && timer < 600) {
    window.alert("Timer Set!");
  } else {
    window.alert("Timer must be set between 1 & 600 seconds");
  }
};

function setArmCode() {
  armCode = document.getElementById('armCode');
  armCode2 = document.getElementById('armCode2');
  if (armCode2 == armCode) {
    window.alert("Ready To Arm");
  } else {
    window.alert("Incorrect Code! Try Again!");
  }
};

function setDisarmCode() {
  disarmCode = document.getElementById('disarmCode');
  disarmCode2 = document.getElementById('disarmCode2');
  console.log(disarmCode + disarmCode2);
  if (disarmCode == disarmCode2) {
    window.alert("Disarmed!");
  } else {
    window.alert("BOOM YOU'RE DEAD!!!");
  }
};

//Ver. 0.05
