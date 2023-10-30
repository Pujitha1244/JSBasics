const myObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

function getObjectKeys(obj) {
  let keys = [];

  function traverse(obj) {
    for (let key in obj) {
      keys.push(key);
      if (typeof obj[key] === "object") {
        traverse(obj[key]);
      }
    }
  }
  traverse(obj);
  return keys;
}

console.log(getObjectKeys(myObject));
