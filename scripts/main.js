var clock = document.getElementById("clock"); //clock text object
var center = document.getElementById("ci");

main(); //entrypoint

function updateClock() {
  var d = new Date();
  var hours = d.getHours();
  var seconds = d.getSeconds();
  var time;
  var a = "AM";

  if (hours > 12) {
    a = "PM";
    hours = hours - 12;
  }

  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  time = hours + ":" + d.getMinutes() + ":" + seconds + " " + a;
  clock.innerHTML = time;
}

function main() {

  setInterval(updateClock, 1000);
}
