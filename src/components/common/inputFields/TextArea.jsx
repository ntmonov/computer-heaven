import React from 'react'

const TextArea = (props) => {
  const { name, value, onChange, label, error } = props
  return (
    <div className='form-group row'>
      <label className='col-sm-2 offset-sm-5' htmlFor={name}>{label}</label>
      <textarea
        className='form-control col-sm-3 offset-sm-4'
        rows={4}
        onChange={onChange}
        name={name}
        id={name}
        value={value} />
      {error && <div className='text-danger'>{error}</div>}
    </div>
  )
}

export default TextArea
