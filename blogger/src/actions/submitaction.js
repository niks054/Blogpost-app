import { SUBMIT_BLOG } from '../actions/types'
export const submitaction = (post) => ({
    type: SUBMIT_BLOG,
    payload: post
})