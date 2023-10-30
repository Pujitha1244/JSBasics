function fun(){  //global
    var x = 10    //formal declaration   x->fun scope
    function gun(){  // gun -> fun scope
        var y=20  // y -> gun scope
        console.log(x)
        console.log(y)
    }
    gun()
    console.log(x)
    console.log(y)
}

fun()