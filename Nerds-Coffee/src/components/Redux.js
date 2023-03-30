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
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.title === action.payload.title) {
                       item.quantity = item.quantity + 1
                       return item
                    } else {
                        return item
                    }
                    
                })
            } 
            case 'removeCoffee':
            return {
                ...state,
                order: state.order.filter((item) => {
                    if (item.title === action.payload.title) {
                       item.quantity = item.quantity - 1
                       if (item.quantity > 0) {
                        return item
                       }
                    } else {
                        return item
                    }
                    
                })
            } 
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