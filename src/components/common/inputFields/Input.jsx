import React from 'react'

const Input = (props) => {
  const { name, type, value, onChange, label, error, pattern } = props
  return (
    <div className='form-group row'>
      <label htmlFor={name} className='col-sm-2 offset-sm-5 form-control-label'>{label}</label>
      <input
        type={type}
        className='form-control col-sm-3 offset-sm-4'
        id={name}
        placeholder={'Enter ' + name}
        name={name}
        onChange={onChange}
        value={value}
        pattern={pattern}
      />
      {error && <div className='text-danger'>{error}</div>}
    </div>
  )
}

export default Input
