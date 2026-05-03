const output = document.getElementById("output");

/* Read the slides, make a prediction, then uncomment this code.*/

var myVar = 0;
output.innerHTML = "Start: "+myVar+"<br>";

functionOne();
function functionOne() {
  myVar = 1;
  output.innerHTML += "functionOne: "+myVar+"<br>";
}

functionTwo();
function functionTwo() {
  var myVar = 2;
  output.innerHTML += "functionTwo: "+myVar+"<br>";
}

output.innerHTML += "end: "+myVar+"<br>";

// C 0 1 2 1
// It didn't do any thing because there was no output in the html but it was C when I fixed it.