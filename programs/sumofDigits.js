function sumOfDigits(num) {
    let result = 0
  while (num > 0) {
    let res = num % 10
    result = result + res
    num = Math.floor(num/10)
  }
  console.log("result",result)
}

sumOfDigits(1234559);
