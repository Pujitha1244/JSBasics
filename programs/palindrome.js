function palindrome(str){
    let reverse = ""
    for(let i=str.length-1;i>=0;i--){
        reverse = reverse+str[i]
    }
    console.log(reverse)
    if(str === reverse){
        console.log("palin")
    } else console.log("not palin")
}

palindrome("level")