function fibbonacci(n){
    let num1 = 0
    let num2 = 1
    for(let i=1;i<=n;i++){
        console.log(num1)
        nextEle = num1+num2
        num1 = num2
        num2 = nextEle
    }
}

fibbonacci(8)