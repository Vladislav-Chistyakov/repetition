const person = {
    name: 'Alice',
    address: {
        street: 'Main St',
        city: 'New York'
    }
}

const { name: nameObject, address: { street: ulica, city: gorod} } = person

console.log(nameObject, ulica, gorod)

const numbers = [1, 2, 3, 4, 5]
const [, , third] = numbers
console.log(third)