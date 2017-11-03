var clock = document.getElementById("clock"); //clock text object
var center = document.getElementById("ci");

main(); //entrypoint

function updateClock() {
  var d = new Date();
  var hours = d.getHours();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var time;
  var a = "AM";

  if (hours > 12) {
    a = "PM";
    hours = hours - 12;
  }

  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  if (hours < 10) {
    hours = "0" + hours.toString();
  }

  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }

  time = hours + " : " + minutes + " : " + seconds;
  clock.innerHTML = time;
  document.getElementById("mmidday").innerHTML = a;
}

function main() {
  $(".centerItems").fadeIn(2000);
  setInterval(updateClock, 1000);
}
