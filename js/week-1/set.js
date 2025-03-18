const numbers = [1, 2, 2, 3, 4, 4, 5]

function initSet(array) {
    return new Set(array)
}

console.log('initSet', initSet(numbers))