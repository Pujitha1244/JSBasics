console.log("Hello world");

for (let i = 1; i <= 3; i++) {
  setTimeout(function exec() {
    console.log("timer done");
  }, 1000);
}

for (let i = 0; i <= 100000; i++) {
  // console.log("for loop")
}

console.log("end");
