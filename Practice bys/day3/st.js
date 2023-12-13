const x = 2
function plus(){
    const y =3
    function result(){
        const z =5
        return x + y + z
    }

    return result
}
const kk = plus() 
const call = kk()

console.log(call)