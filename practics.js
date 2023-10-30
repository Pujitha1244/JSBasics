// console.log([10]+[10]);

function getNumber() {
  return;
}

var numb = getNumber();
console.log(numb);

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([5, 3, 9, 1, 7]));


function removeDup(arr){
    console.log(new Set(arr))
}

removeDup([1,3,6,4,4,34,6,7,8,1,1,1,1,1,9,9,7,6,5,3,3,2,2,2,2,])