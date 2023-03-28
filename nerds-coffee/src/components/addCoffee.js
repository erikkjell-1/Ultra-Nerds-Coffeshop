function addCoffee(value) {
    console.log(value);
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

export { addCoffee, addOrderedCoffee, updateOrdered, updateCoffeeAmount }