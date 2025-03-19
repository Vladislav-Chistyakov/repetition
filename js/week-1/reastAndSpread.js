const user = {
    name: 'John',
    age: 30,
    country: 'USA',
    city: 'New York',
    occupation: 'Developer'
}

const { name, age, country, ...rest } = user
console.log(name, age, country, rest)

const numbers = [1, 2, 3, 4, 5]
const [one, two, ...restArray] = numbers
console.log(one, two, restArray)

const userTwo = {
    name: 'Alice',
    age: 25,
    country: 'UK',
}

const newUsertwo = {...userTwo, status: 'active'}
console.log(newUsertwo)

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Данные загружены');
        }, 2000);
    })
}

getData = async () => {
    const data = await fetchData()
    console.log(data)
}
getData()

function fetchDataWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Ошибка загрузки данных');
        }, 2000);
    });
}

getDataError = async () => {
    await fetchDataWithError()
        .then(responce => console.log(responce))
        .catch(error => console.log(error))
}
getDataError ()