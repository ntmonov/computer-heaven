import React from 'react'
import TextArea from '../common/inputFields/TextArea'
import { leaveComment } from '../../utils/commentRequests.js'
import toastr from 'toastr'
import { getComments } from '../../utils/commentRequests'

class CommentsForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: {
        author: window.sessionStorage.getItem('username'),
        type: this.props.type,
        productId: this.props.productId,
        text: ''
      },
      comments: []
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  onChange (event) {
    let value = event.target.value
    let comment = this.state.comment
    comment.text = value
    this.setState({ comment })
  }

  async onSubmit (event) {
    event.preventDefault()
    await leaveComment(this.state.comment)
    toastr.success('Comment added')
    this.getData()
  }

  async getData () {
    let comments = await getComments('type', this.props.productId)
    this.setState({ comments })
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <TextArea onChange={this.onChange}
            name='comment'
            id='comment'
            value={this.state.comment.text}
            label='Leave comment'
          />

          <div className='form-group row'>
            <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value='Comment' />
          </div>
          {this.state.comments.map(comment => (

            <div key={comment._id} className='card text-white bg-primary mb-3' style={{ width: '18rem' }}>
              <div className='card-body'>
                <h5 className='card-title'>by {comment.author}</h5>
                <p className='card-text'>{comment.text}</p>
                <p className='card-text' style={{ fontStyle: 'italic' }}>posted on {new Date(comment._kmd.ect).toLocaleDateString()}</p>
              </div>
            </div>

          ))}
        </form>
      </React.Fragment>
    )
  }
}

export default CommentsForm
