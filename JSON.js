var str =
  '{"names":[' + // crate JSON object
  '{"first":"Hakuna","lastN":"Matata" },' +
  '{"first":"Jane","lastN":"Doe" },' +
  '{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str); // parse
document.write(obj.names[1].first); // access

//Send
var myObj = { name: "Jane", age: 18, city: "Chicago" }; // create object
var myJSON = JSON.stringify(myObj); // stringify
window.location = "demo.php?x=" + myJSON; // send to php

//Storing and retrieving
myObj = { name: "Jane", age: 18, city: "Chicago" };
myJSON = JSON.stringify(myObj); // storing data
localStorage.setItem("testJSON", myJSON);
text = localStorage.getItem("testJSON"); // retrieving data
obj = JSON.parse(text);
document.write(obj.name);
