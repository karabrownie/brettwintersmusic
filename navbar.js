function navbar() {
  var x = document.getElementById("nav-links");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}