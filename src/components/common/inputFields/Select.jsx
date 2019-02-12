import React from 'react'

const Select = (props) => {
  return (

    <div className='form-group row'>
      <label htmlFor={props.name} className='col-sm-2 offset-sm-5'>{props.label}</label>
      <select className='form-control col-sm-3 offset-sm-4' id={props.name} name={props.name} onChange={props.onChange}>
        {props.options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
