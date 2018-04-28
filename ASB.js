var timer = document.getElementById('timer');

var armCode = document.getElementById('armCode2');

var disarmCode = document.getElementById('disarmCode');

function setTimer() {
  if (timer < 1 && timer > 600) {
    window.alert("Timer Set!");
  } else {
    window.alert("Timer must be set between 1 & 600 seconds");
  }
};

function setArmCode() {
  var armCode2 = document.getElementById('arm2');
  if (armCode2 == armCode) {
    window.alert("Ready To Arm");
  } else {
    window.alert("Incorrect Code! Try Again!");
  }
};

function setDisarmCode() {
  var disarmCode2 = document.getElementById('disarm2');
  if (disarmCode2 == disarmCode) {
    window.alert("Disarmed!");
  } else {
    window.alert("BOOM YOU'RE DEAD!!!");
  }
};

//Ver. 0.03
