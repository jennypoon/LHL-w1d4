//below is the closure()
//function(x) returns a new function therefore closure
var countdownGenerator = function (x) {
  /* your code here */
  var counter = x;


  return function() {
    //if statements needs to happen first
    //otherwise x decreases first
    if (x === 3 || x === 2 || x === 1) {
      console.log("T-minus " + x + "...")
    } else if (x === 0) {
      console.log("Blast Off");
    } else {
      console.log("Rockets already gone, bub!")
    } x--;
  };

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!