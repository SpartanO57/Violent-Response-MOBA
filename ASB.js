var timer = document.getElementById('timer');

var armCode = document.getElementById('arm');

var disarmCode = document.getElementById('disarm');

function setTimer() {
  var timer = document.getElementById('timer');
  if (timer < 1 || timer > 600) {
    window.alert("Timer must be set between 1 & 600 seconds");
  } else {
    window.alert("Timer Set!");
  }
};

function setArmCode() {
  var armCode2 = document.getElementById('arm');
  if (armCode2 == armCode) {
    window.alert("Ready To Arm");
  } else {
    window.alert("Incorrect Code! Try Again!");
  }
};

function setDisarmCode() {
  var disarmCode2 = document.getElementById('disarm');
  if (disarmCode2 == disarmCode) {
    window.alert("Disarmed!");
  } else {
    window.alert("BOOM YOU'RE DEAD!!!");
  }
};

console.log(timer);
console.log(armCode);
console.log(armCode2);
console.log(disarmCode);
console.log(disarmCode2);

//Ver. 0
