function pattern1(x) {
  for (let row = 1; row <= x; row++) {
    let str = "";
    for (let col = 1; col <= x; col++) {
      str = str + "*";
    }
    console.log(str);
  }
}
pattern1(6);

// console.log(pattern1(4));
