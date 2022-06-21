// ASSINCRONISMO
// Será executado todos os codigos que não estão com a função setTimeout primeiro.

setTimeout(
    () => {
        console.log("D: ", 0)
    }, 10000
)
console.log(1)
console.log(2)
console.log(3)
console.log(4)

setTimeout(
    () => {
        console.log("D:",5)
    }, 5000
)

//console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)