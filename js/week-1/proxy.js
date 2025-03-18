const user = {
    name: 'Bob',
    age: 30,
}

const userProxy = new Proxy(user, {
    set(target, key, value) {
        console.log(`Меняем значение ключа ${key}: значение ${target[key]} на ${value}`)
        target[key] = value
        return true
    }
})

const userProxyReflect = new Proxy(user, {
    set(target, key, value) {
        if (!Reflect.has(target, key)) {
            Reflect.set(target, key, 'Unknown')
            console.log(`${target[key]}`);
        } else {
            console.log('Не меняем значение');
            return true
        }
    }
})

userProxy.name = 'Senku'
console.log(userProxy.name)

userProxyReflect.name = 'Senku'
userProxyReflect.address = 'Senku'
console.log(userProxyReflect.address)