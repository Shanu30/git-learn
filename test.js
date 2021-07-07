function add(a) {
    var sum = 0
    for(let i = 0; i <a.length; i++) {
        sum += a[i]
    }
    return sum
}

console.log(add([4, 5, 6]))