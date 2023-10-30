function UpperTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str = str + " ";
    }
    let stars = 2 * i - 1;
    for (let k = 1; k <= stars; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}

function lowerTriangle(n) {
  for (let i = 1; i <= n - 1; i++) {
    let str = "";
    let spaces = i;
    for (let j = 1; j <= spaces; j++) {
      str = str + " ";
    }
    let stars = 2 * (n - i) - 1;
    for (let k = 1; k <= stars; k++) {
      str = str + "*";
    }
    console.log(str)
  }
}

function pattern(n){
    UpperTriangle(n)
    lowerTriangle(n)
}

pattern(5)
