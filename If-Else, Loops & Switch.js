//If Else
if (age >= 14 && age < 19) {
  status = "Eligible.";
} else {
  status = "Not eligible.";
}

//For:
for (var i = 0; i < 10; i++) {
  document.write(i + ": " + i * 3 + "<br />");
}
var sum = 0;
for (var i = 0; i < a.length; i++) {
  sum += a[i];
}
html = "";
for (var i of custOrder) {
  html += "<li>" + i + "</li>";
}

//While:
var i = 1;
while (i < 100) {
  i *= 2;
  document.write(i + ", ");
}

//Do While:
var i = 1;
do {
  i *= 2;
  document.write(i + ", ");
} while (i < 100);

//Break:
for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  document.write(i + ", ");
}

//Continue:
for (var i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  document.write(i + ", ");
}

//Switch:
switch (new Date().getDay()) {
  case 6:
    text = "Saturday";
    break;
  case 0:
    text = "Sunday";
    break;
  default:
    text = "Whatever";
}
