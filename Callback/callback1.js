function fun(x,fn){
    for (let i = 0; i< x ; i++){
        console.log(i)
    } 
    fn()
}

fun(10, function exec(){          // function exec is a callback function
    console.log("I am executed")
})