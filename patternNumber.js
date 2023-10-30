function patternNumber(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str = str + " ";
    }
    for (let k = spaces; k <= n; k++) {
      str = str + i;
    }
  }
  console.log(str)
}


patternNumber(4)