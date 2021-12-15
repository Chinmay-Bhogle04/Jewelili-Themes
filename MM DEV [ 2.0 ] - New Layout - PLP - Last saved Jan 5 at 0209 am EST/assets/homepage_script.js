function openEvent(evt, city) {
  var i, hotelblock, tablinks;
  hotelblock = document.getElementsByClassName("image-block");
  tablinks = document.getElementsByClassName("text-block");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  for (i = 0; i < hotelblock.length; i++) {
    hotelblock[i].style.display = "none";
  }  
  document.getElementById(city).style.display = "block";
  evt.className += " active";
}