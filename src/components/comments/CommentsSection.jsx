import React from 'react'
import { getComments } from '../../utils/commentRequests.js'

class CommentsSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  static getDerivedStateFromProps (props, state) {
    if (state.comments[state.comments.indexOf(props.comment)] !== props.comment) {
      return {
        comments: [...state.comments, props.comment]
      }
    }
  }

  async getData () {
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
