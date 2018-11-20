import { DISPLAY_SINGLE_BLOG_POST } from '../constants'

import blogData from './blogData.json'

export function blogReducer(state = blogData, action) {
  switch(action.type) {
    case DISPLAY_SINGLE_BLOG_POST:
      return [...blogData.filter(post => post.id === action.blogId)]
    default:
      return state
  }
}