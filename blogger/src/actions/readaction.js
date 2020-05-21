import { GET_BLOG } from './types'
export const readpost = data => ({
    type: GET_BLOG,
    payload: data
})
