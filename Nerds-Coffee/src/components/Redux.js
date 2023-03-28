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