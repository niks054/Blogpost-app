import { SUBMIT_BLOG } from '../actions/types'
export const sumbitReducer = (state = {
    author: '',
    title: '',
    blog: ''
}, action) => {
    switch (action.type) {
        case SUBMIT_BLOG:
            return {
                ...state,
                author: action.payload.author,
                title: action.payload.title,
                blog: action.payload.body
            }
        default:
            return state
    }
}