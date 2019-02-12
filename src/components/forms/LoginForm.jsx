import React from 'react'
import Input from '../common/inputFields/Input'

function LoginForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input onChange={props.onChange}
        name='username'
        id='username'
        type='text'
        value={props.user.username}
        label='Username'
        error={props.errors.username}
      />

      <Input onChange={props.onChange}
        name='password'
        id='password'
        type='password'
        value={props.user.password}
        label='Password'
        error={props.errors.password}
      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value='Login' />
      </div>

    </form>
  )
}

export default LoginForm
