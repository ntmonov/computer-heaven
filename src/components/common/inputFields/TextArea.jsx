import React from 'react'

const TextArea = (props) => {
  const { name, value, onChange, label } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        rows={7}
        onChange={onChange}
        name={name}
        id={name}
        value={value} />
    </div>
  )
}

export default TextArea
