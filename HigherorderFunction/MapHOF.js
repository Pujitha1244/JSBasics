/* 
map is a higher order function available with arrays
it takes function as an argument and return new array
it returns an array



Every element is passes one by one in the argument function and populates the array

map internally iterates over every element of the orginal array, pass the element in the argument function 
and then store the value inside an array
*/

function square(ele) {
  return ele * ele;
}

const arr = [1, 2, 3, 4, 5];

const result = arr.map(square); //square is function passes as an argument
console.log(result);
console.log(arr)



/* */

/*
when to use maps?
In any situation when we have to do an operation on every element of the array and store the result

 */

