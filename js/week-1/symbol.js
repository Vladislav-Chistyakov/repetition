const user = {
    name: 'Alis',
    [Symbol('id')]: 1,
}

for (const key in user) {
    console.log(key)
}