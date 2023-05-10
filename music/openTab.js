function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("tab-container");
  if (document.getElementById(tabName).style.display == "block"){
    document.getElementById(tabName).style.display = "none";
  }
  else{
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
  
}