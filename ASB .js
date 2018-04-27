var timer = getElementById('timer');

var armCode = getElementById('arm');

var disarmCode = getElementById('disarm');

function setTimer() {
  var timer = getElementById('timer');
  if (timer < 1 || timer > 600) {
    window.alert("Timer must be set between 1 & 600 seconds");
  } else {
    window.alert("Timer Set!");
  }
};

function setArmCode() {
  var armCode2 = getElementById('arm');
  if (armCode2 == armCode) {
    window.alert("Ready To Arm");
  } else {
    window.alert("Incorrect Code! Try Again!");
  }
};

function setDisarmCode() {
  var disarmCode2 = getElementById('disarm');
  if (disarmCode2 == disarmCode) {
    window.alert("Disarmed!");
  } else {
    window.alert("BOOM YOU'RE DEAD!!!");
  }
};
