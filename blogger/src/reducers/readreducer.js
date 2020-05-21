import { GET_BLOG } from '../actions/types'
export const readreducer = (state = {
    items: []
}, action) => {
    switch (action.type) {
        case GET_BLOG:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}