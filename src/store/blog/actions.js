import { DISPLAY_SINGLE_BLOG_POST } from '../constants'

export function displaySingleBlogPost(blogId) {
  return { type: DISPLAY_SINGLE_BLOG_POST, blogId }
}