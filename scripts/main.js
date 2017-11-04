var clock = document.getElementById("clock"); //clock text object
var center = document.getElementById("ci");
var w = $(window);
var name = "";

main(); //entrypoint

w.keyup(function (event) {
  if (event.which == 13) {
    googleSearch();
  }
});

function googleSearch() {
  var searchItem = document.getElementById("searchBar").value;
  if (searchItem != "") {
    var searchItem = "https://www.google.com/search?q=" + searchItem;
    window.location = searchItem;
  }
}

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
  document.getElementById("midday").innerHTML = a;
}

function main() {
  $(".hide").hide();
  $("#cen").fadeIn(2000);
  setInterval(updateClock, 1000);

  updateName();
}

function updateName() {
  name = getCookie();
  if (name != "") {
    var a = "Good morning, ";
    var d = new Date();
    var hours = d.getHours();

    if (hours > 19) {
      a = "Good evening, ";
    } else if (hours > 12) {
      a = "Good afternoon, ";
    }

    document.getElementById("h").innerHTML = a + name;
  } else {
    document.getElementById("h").innerHTML = "What is your name?";
    $(".hide").show();
  }
}

function setName() {
  var readName = document.getElementById("name").value;
  //document.cookie = "newtabname=" + readName + "; expires=Thu, 31 Dec 2020 12:00:00 UTC";
  setCookie("newtabname", readName, 1000);
  var cookies = document.cookie;
  window.location = window.location;
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
  var cname = "newtabname=";
  var allCookies = document.cookie;
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if(c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
