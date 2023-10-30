function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// let x = 11
// let result = isEven(x)
// if(result === true){
//     console.log("even")
// }else{
//     console.log("not even")
// }
for (let i = 0; i <= 20; i++) {
   let result =  isEven(i)
    if(result === true){
        console.log(i + " is a Even")
    }else{
        console.log(i + " is odd")
    }
}
