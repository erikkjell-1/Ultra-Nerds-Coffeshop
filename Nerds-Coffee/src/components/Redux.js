const initialState = {
    order: []
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'add':
            return {
                ...state,
                order: state.order + action.payload
            }
        // case 'remove':
        //     return {
        //         ...state
        //     }
    
        default:
            return state
    }
}

export default reducer