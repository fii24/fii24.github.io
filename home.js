function alert_name() {
  //Create name variable
  var name = "Farah";
  alert("My name is " + name + " uwu.");
  console.log("Test 123 uwu");
}

function change_image() {
  var image = document.getElementById('kitten');
  image.src = "img/kitten1.jpg";
}

function bigImg(x) {
  x.style.height = "250px";
  x.style.width = "250px";
}

function normalImg(x) {
  x.style.height = "50px";
  x.style.width = "50px";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
