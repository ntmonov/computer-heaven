import React from 'react'
import { getComments } from '../../utils/commentRequests.js'

class CommentsSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  async componentDidMount () {
    let comments = await getComments('type', this.props.productId)
    this.setState({ comments })
  }

  render () {
    return (
      <React.Fragment>
        {this.state.comments.map(comment => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            <span>by {comment.author}</span>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default CommentsSection
