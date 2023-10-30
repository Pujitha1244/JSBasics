function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}
pattern2(4);
pattern2(6)
