function armstrong(number) {
  let cube = 0;
  let num = number;
  while (num > 0) {
    rightNum = num % 10;
    cube = cube + rightNum * rightNum * rightNum;
    num = Math.floor(num / 10);
  }
  console.log(cube)
  if (cube == number) {
    console.log("armstrong");
  } else {
    console.log("not Armstrong");
  }
}

armstrong(153);
