var themeColor = "#ccffff";

var bookmarkContainer = document.getElementById('bookmarks');
var bookmarks = [];

main(); //entrypoint

function main() {
  bookmarks = [
    //new bookmark(1, "stackoverflow", "Stack Overflow", "https://stackoverflow.com/"),
    //new bookmark(2, "google", "Google", "https://google.com")
  ];

  for (var i = 0; i < bookmarks.length; i++) {
    bookmarks[i].loadBookmark();
  }
}

//defining the bookmark class
function bookmark(id, logoName, title, url) {
  this.id = id; // used for identifying specific bookmarks
  this.logoName = "logos/" + logoName + ".png";
  this.title = title;
  this.url = url;
  this.loaded = false;
  this.element = null;
  this.childBTN = null;
  this.childText = null;

  this.loadBookmark = function() {
    this.element = document.createElement("div");
    this.element.setAttribute("class", "buttonContainer");

    this.childBTN = document.createElement("div");
    this.childBTN.setAttribute("class", "links");
    this.childBTN.setAttribute("id", id);
    var link = "linkCLicked(" + this.id.toString() + ")";
    this.childBTN.setAttribute("onclick", link);

    this.childText = document.createElement("p");
    this.childText.setAttribute("class", "labels");
    this.childText.innerHTML = this.title;

    this.element.appendChild(this.childBTN);
    this.element.appendChild(this.childText);

    bookmarkContainer.appendChild(this.element);

    var id = "#" + this.id;

    try {
      $(id).css("background-image", this.logoName);
    } catch (e) {
      $(id).css("background-color", themeColor);
    }
  };
}

function linkClicked(id) {
  var link = "about:blank";
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].id == id && url != null) {
      link = bookmarks[i].url;
    }
  }
}
