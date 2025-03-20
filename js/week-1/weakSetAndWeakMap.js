const cache = new WeakMap()

function cacheFunction(obj, value) {
    if (!cache.has(obj)) {
        cache.set(obj, value)
        console.log(`Кэшируем значени : ${value}`)
    } else {
        console.log('Используем кэш', cache.get(obj))
    }
}

let objA = { id: 1 }
let objB = { id: 2 }

cacheFunction(objA, 'Result A')
cacheFunction(objB, 'Result B')
cacheFunction(objA, 'New Result A')

objA = null
cacheFunction(objA, "Another Result A")
