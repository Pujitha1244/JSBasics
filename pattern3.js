// function pattern3(n) {
//   for (let i = n; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       if (j < i) {
//         str = str + " ";
//       } else {
//         str = str + "*";
//       }
//     }
//     // console.log("pattern 3");
//     console.log(str);
//   }
// }
// pattern3(4);

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str = str + " ";
    }
    let stars = i;
    for (let k = 1; k <= stars; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}

pattern3(4)