/*This is the function to set the timer for the bomb. I hope to eventually add
a fully working timer, but for now i'm concentrating on just getting the basic
time frame settings and having it work when the buttons are pressed.*/

function setTimer() {
  if (timer > 1 && timer < 600) {
    window.alert("Timer Set!");
  } else {
    window.alert("Timer must be set between 1 & 600 seconds");
  }
};

function setArmCode() {
  if (armCode2 == armCode) {
    window.alert("Ready To Arm");
  } else {
    window.alert("Incorrect Code! Try Again!");
  }
};

function setDisarmCode() {
  if (disarmCode == disarmCode2) {
    window.alert("Disarmed!");
  } else {
    window.alert("BOOM YOU'RE DEAD!!!");
  }
};

//Ver. 0.05


//Test Area


let armCode = document.getElementById('armCode');

let armCode2 = document.getElementById('armCode2');
let disarmCode = document.getElementById('disarmCode');
let disarmCode2 = document.getElementById('disarmCode2');
let timer = document.getElementById('timer');
