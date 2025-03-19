const addManyMonth = {
    arbeiten: 130_000,
    bonus: 0,
}

const proxyAddManyMonth = new Proxy(addManyMonth, {
    get(target, key) {
        return Reflect.get(target, key)
    },
    set(target, key, value) {
        if (key === 'bonus') {
            console.log('Изменяем бонус', key, value)
            Reflect.set(target, key, value)
            return true
        } else {
            return false
        }
    }
})

proxyAddManyMonth.bonus = 10_000
proxyAddManyMonth.addManyMonth = 100_000
proxyAddManyMonth.arbeiten = 150_000
