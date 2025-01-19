function test () {
    var a = "3"; 
    var b = "8"; 
// ****************DO NOT CHANGE THE CODE ABOVE*******************

// Write your code here  
var c = a
a = b
b = c
// ****************DO NOT CHANGE THE CODE BELOW*******************

console.log("a is " + a)
console.log("b is " + b)
}

test ()

// think of bucket 
// a is sand 
// b is water 
// in normal life you will need an another bucket to make the switch

// c is new bucket 

// put the sand in the bucket c 
// a is empty now 
// put the water in the bucket a 
// b is empty now 
// b can be c 