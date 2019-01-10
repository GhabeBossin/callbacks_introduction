// Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)
//then
//refactor code to include .forEach method instead of a for loop.

// The second argument/parameter is expected to be a function

var whereIsWaldo = "";
//var nameArray = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, found) {
	arr.forEach(function(name, i) {
		if (name === "Waldo") {
			whereIsWaldo = i;
			found(); // execute callback
		}
	});
}

function actionWhenFound() { //cb
   console.log("Found Waldo at Index " + whereIsWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);