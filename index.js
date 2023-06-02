function writeCards(names, event) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return array
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown(int){
    for(let i = 0; i <= int; i++){
        console.log(int-i)
    }
}
countDown(10)