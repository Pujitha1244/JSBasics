// const num = 124323;
// console.log("String",String(num))
// console.log("split",String(num).split("").reverse().join(""))
// const reverse = (num) => parseInt(String(num).split("").reverse().join(""), 10);
// console.log(reverse(num));

// let num = 123

// function reverse(num) {
//   let result = 0;
//   while (num > 0) {
//     rightNum = num % 10;
//     result = result * 10 + rightNum;
//     num = Math.floor(num / 10);
//   }
//   console.log(result);
//   return result;
// }

// reverse(1234567890);

function reverse(num) {
  let result = 0;
  while (num > 0) {
    rightnum = num % 10;
    result = result * 10 + rightnum;
    num = Math.floor(num / 10);
  }
  console.log("num",result);
  return result;
}

reverse(123);


function reverseString (str){
  let result = ""
  for(let i=str.length-1;i>=0;i--){
    result = result + str[i]
  }
  console.log("string",result)
  return result
}

reverseString("hello")
