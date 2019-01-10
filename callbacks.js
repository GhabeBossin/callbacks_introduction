// Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)


// The second argument/parameter is expected to be a function

var whereIsWaldo = "";

function findWaldo(arr, found) {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
			whereIsWaldo = i;
			found(); // execute callback
      }
   }
}

function actionWhenFound() {
   console.log("Found Waldo at Index " + whereIsWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);