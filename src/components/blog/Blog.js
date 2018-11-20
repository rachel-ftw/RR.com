import React from 'react'

import BlurbCard from './BlurbCard'

const blogStyles = {
  fontSize: '2em',
  color: '#fff',
}

const BlogContainer = ({ blogPosts }) => {
  const blurbCards = blogPosts.map( post => <BlurbCard key={`post-${post.id}`} post={post} />)
  
  return (
  <div className="blog" style={{ backgroundColor: '#333'}}>
    <h2 style={blogStyles}>BLOG</h2>
    {blurbCards}
  </div>
)}

export default BlogContainer