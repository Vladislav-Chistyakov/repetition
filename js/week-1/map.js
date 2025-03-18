const words = ["apple", "banana", "apple", "orange", "banana", "banana"]


function initMap(array) {
    const newMap = new Map()
    for (const item of array) {
        if (newMap.has(item)) {
            newMap.set(item, newMap.get(item) + 1)
        } else {
            newMap.set(item, 1)
        }
    }
    return newMap
}

console.log(initMap(words))
