var clock = document.getElementById("clock"); //clock text object
var center = document.getElementById("ci");
var w = $(window);
var name = "";

var quotes = [
  "'We are all in the gutter, but some of us are looking at the stars.' -Oscar Wilde",
  "'Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.' -Dr. Seuss",
  "'You never know what worse luck your bad luck has saved you from.' -Cormac McCarthy",
  "'Make your life a masterpiece; imagine no limitations on what you can be, have or do.' -Brian Tracy",
  "'Life is sabout making an impact, not making an income.' -Kevin Kruse",
  "'Whatever the mind of man can conceive and believe, it can achieve.' -Napoleon Hill",
  "'Strive not to be a success, but rather to be of value.' -Albert Einstein",
  "'You miss 100% of the shots you don't take.' -Wayne Gretzky",
  "'I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed' -Michael Jordan",
  "'Life is 10% what happens to me and 90% of how I react to it.' -Charles Swindoll",
  "'Winning isn't everything, but wanting to win is.' -Vince Lombardi",
  "'You can never cross the ocean until you have the courage to lose sight of the shore.' -Christopher Columbus",
  "'When I let go of what I am, I become what I might be.' -Lao Tzu"
];

main(); //entrypoint

w.keyup(function (event) {
  if (event.which == 13) {
    googleSearch();
  }
});

function googleSearch() {
  var searchItem = document.getElementById("searchBar").value;
  if (searchItem != "") {
    searchItem = "https://www.google.com/search?q=" + searchItem;
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
  randomQuote();
  $(".hide").hide();
  $("#cen").fadeIn(2000);
  setInterval(updateClock, 1000);

  updateName();
}

function randomQuote() {
  var quoteN = (Math.floor(Math.random() * (quotes.length + 1))) - 1;
  console.log(quoteN);
  document.getElementById("quote").innerHTML = quotes[quoteN];
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
