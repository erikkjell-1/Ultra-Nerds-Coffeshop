function addCoffee(value) {
    return {
        type: 'add',
        payload: value
    }
}

function updateCoffeeAmount(value) {
    return {
        type: 'updateAmount',
        payload: value
    }
}

function removeCoffee(value) {
    return {
        type: 'removeCoffee',
        payload: value
    }
}

function addOrderedCoffee(value) {
    return {
        type: 'addOrdered',
        payload: value
    }
}

function updateOrdered(value) {
    return {
        type: 'updateOrdered',
        payload: value
    }
}

export { addCoffee, addOrderedCoffee, updateOrdered, updateCoffeeAmount, removeCoffee }