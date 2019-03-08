import React from 'react'
import TextArea from '../common/inputFields/TextArea'
import { leaveComment } from '../../utils/commentRequests.js'
import toastr from 'toastr'
import CommentsSection from './CommentsSection'

class CommentsForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: {
        author: window.sessionStorage.getItem('username'),
        type: this.props.type,
        productId: this.props.productId,
        text: ''
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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

        </form>
        <CommentsSection type={this.props.type} productId={this.props.productId} />
      </React.Fragment>
    )
  }
}

export default CommentsForm
