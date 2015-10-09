var smiley = document.getElementById("smiley");
var textButton = document.getElementById("text_button");
var adder = document.getElementById("adder");

var currentValue = "<h3>Current Value!</h3>"
var otherValue = "<h3>New Value!</h3>"
var current = true;

var add = function(x, y) {
  return x + y;
}

smiley.onclick = function() {
  alert("Welcome to Charlie's site?");
}

textButton.onclick = function() {
  if (current) {
    document.getElementById("text").innerHTML = otherValue;
    current = false;
  } else {
    document.getElementById("text").innerHTML = currentValue;
    current = true;
  }
}
