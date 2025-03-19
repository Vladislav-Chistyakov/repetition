const words = ["apple", "banana", "apple", "orange", "banana", "banana"]

const newMap = new Map()

for (let word of words) {
    if (newMap.has(word)) {
        newMap.set(word, newMap.get(word) + 1)
    } else {
        newMap.set(word, 1)
    }
}

console.log(newMap)
