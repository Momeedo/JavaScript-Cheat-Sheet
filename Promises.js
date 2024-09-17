function sum(a, b) {
  return Promise(function (resolve, reject) {
    setTimeout(function () {
      // send the response after 1 second
      if (typeof a !== "number" || typeof b !== "number") {
        // testing input types
        return reject(new TypeError("Inputs must be numbers"));
      }
      resolve(a + b);
    }, 1000);
  });
}
var myPromise = sum(10, 5);
myPromsise
  .then(function (result) {
    document.write(" 10 + 5: ", result);
    return sum(null, "foo"); // Invalid data and return another promise
  })
  .then(function () {
    // Won't be called because of the error
  })
  .catch(function (err) {
    // The catch handler is called instead, after another second
    console.error(err); // => Please provide two numbers to sum.
  });

//States:
//pending, fulfilled, rejected;

//Properties:
//Promise.length, Promise.prototype;

//Methods:
Promise.all(iterable);
Promise.race(iterable);
Promise.reject(reason);
Promise.resolve(value);
