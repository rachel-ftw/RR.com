import React from 'react'
import { connect } from 'react-redux'

import Blog from './Blog'
import { displaySingleBlogPost } from '../../store/blog/actions'

const BlogContainer = props => <Blog {...props} />

function mapStateToProps({ blogPosts }) {
  return { blogPosts }
}

export default connect(mapStateToProps, { displaySingleBlogPost })(BlogContainer)