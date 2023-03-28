const initialState = {
    order: [],
    ordered: {}

}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'add':
            return {
                ...state,
                order: state.order.concat([action.payload]) 
            }
        case 'updateAmount':
            state.order.forEach((coffee) => {
                if (coffee.title === action.payload.title) {
                    console.log(coffee.quantity);
                    return {
                        ...state,
                        coffee: coffee.quantity + 1
                            
                            // coffee.order.quantity + action.payload.quantity
                    }
                }
                else {
                    console.log('inte samma namn');
                }
            })
            
        case 'addOrdered':
            return {
                ...state,
                ordered: action.payload,
                order: state.order = []
            }
        case 'updateOrdered':
            return {
                ...state,
                ordered: state.ordered.eta = action.payload.eta
            }
    
        default:
            return state
    }
}

export default reducer