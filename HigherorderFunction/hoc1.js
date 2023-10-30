function functionHoc(x,fn){
    console.log(x)
    fn()
}
functionHoc(10,add)

function add(){
    console.log(10+20)
}