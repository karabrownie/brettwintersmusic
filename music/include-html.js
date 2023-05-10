/* filename -> "directory/file.txt"
   classname -> "#id-name" */
function includeHTML(filename, idname){
  fetch(filename)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(idname).innerHTML = data;
  });
}

const lyric_elements = document.getElementsByClassName("lyrics");
var element, i, filename, idname;
for (i = 0; i < lyric_elements.length; i++){
  element = lyric_elements[i];
  filename = element.getAttribute("file");
  idname = "#" + element.getAttribute("id");
  includeHTML(filename, idname);
}