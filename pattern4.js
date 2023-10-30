// function pattern4(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     let spaces = n - i;
//     for (let j = 1; j <= spaces; j++) {
//       str = str + " ";
//     }
//     let stars = 2 * i - 1;
//     for (let k = 1; k <= stars; k++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }

// pattern4(3);

function pattern4(n) {
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
  
  pattern4(3);
