var result = []; //store data from functions into global variables for access

//for each statement
function findWaldo(arr, found) {
  arr.forEach(function(word, i) {
    if (word === "Waldo") {
      result = i;
      found();
      }
  })
};

// for loop
// function findWaldo(arr, found) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       result = i;
//       found();
//     }
//   }
// }

function actionWhenFound() {
  console.log("Found Waldo at index " + result + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);