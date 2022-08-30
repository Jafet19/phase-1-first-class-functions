function receivesAFunction(cb){
    cb()
}
function returnsANamedFunction(cb){
    return function namedFn(){
        console.log("this is a named function")
    }
}
function returnsAnAnonymousFunction(){
    return () => console.log("this is an annonymus")
}