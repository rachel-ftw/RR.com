import React, { Component } from 'react'
import './PortfolioCard.css'
import blogData from './blog_data'



const ListItem = (props) => <li>{ props.text }</li>

const List = (props) => {
    const listNodes = props.data.map((
    value,index) => {
        return(
            <ListItem text={value} key={index}></ListItem>
        )
    })

    return ( <ul>{listNodes}</ul>
    )
}


class PortfolioCard extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {blogs: blogData}
  }

  render() {
    let blogPosts = this.state.blogs
    return <div>blog post here</div>
    // return {blogPosts.map( blog => <PortfolioCard blog={blog} />)}
  }
}

// const PortfolioCard = props => {
//   return <div key=`{props.blog.id}` className="portfolio-card">
//     <h3>{props.blog.title}</h3>
//     <p>{props.blog.content}</p> 
//   </div>
// }

export default PortfolioCard