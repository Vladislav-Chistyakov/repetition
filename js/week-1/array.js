const userInfo = {
    name: 'Alice',
    age: 25
};

const additionalInfo = {
    address: '456 Elm St',
    phone: '987-654-3210'
}

const newObject = { ...additionalInfo, ...userInfo }

console.log('new object', newObject)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [ ...array1, ...array2 ]
console.log('array3', array3)
