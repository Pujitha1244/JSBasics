function gcd(a, b) {
    let divNum = []
    console.log(Math.min(a,b))
  for (let i = 1; i <= Math.min(a,b); i++) {
    if (a % i === 0 && b % i === 0) {
        divNum.push(i)
    }
  }
  console.log(divNum[divNum.length-1])
}

gcd(28,22)