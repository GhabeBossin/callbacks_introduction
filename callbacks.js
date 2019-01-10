var myFn = function() {
    console.log("I am a function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
    f();
}

runner(myFn);