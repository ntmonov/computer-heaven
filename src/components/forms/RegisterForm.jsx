import React from 'react'
import Input from '../common/inputFields/Input'
import TextArea from '../common/inputFields/TextArea'

function RegisterForm (props) {
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

      <Input onChange={props.onChange}
        name='repeatPass'
        id='repeatPass'
        type='password'
        value={props.user.repeatPass}
        label='Repeat Password'
        error={props.errors.repeatPass}
      />

      <Input onChange={props.onChange}
        name='email'
        id='email'
        type='email'
        value={props.user.email}
        label='Enter Email'
      />

      <TextArea onChange={props.onChange}
        name='address'
        id='address'
        value={props.user.address}
        label='Enter address'
        error={props.errors.address}
      />
      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value='Register' />
      </div>

    </form>

  )
}

export default RegisterForm
