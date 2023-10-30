function pattern5(n) {
  for (let i = 5; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

pattern5(4);
