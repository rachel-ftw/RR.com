import React from 'react'

import BlurbCard from './BlurbCard'

const BlogContainer = ({ blogPosts }) => {
  const blurbCards = blogPosts.map( post => <BlurbCard key={`post-${post.id}`} post={post} />)
  
  return (
  <div className="blog">
    <h2 className="page-title">blog</h2>
    {blurbCards}
  </div>
)}

export default BlogContainer