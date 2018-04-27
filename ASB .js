var timer = getElementById('timer');

var timer = getElementById('arm');

var disarmCode = getElementById('disarm');

function setTimer() {
  var timer = getElementById('timer');
  if (timer < 1 || timer > 600) {
    window.alert("Timer must be set between 1 & 600 seconds");
  } else {
    window.alert("Timer Set!");
  }
}
