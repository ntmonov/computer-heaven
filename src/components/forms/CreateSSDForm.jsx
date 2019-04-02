import React from 'react'
import Input from '../common/inputFields/Input'
import Select from '../common/inputFields/Select'
import TextArea from '../common/inputFields/TextArea'

function CreateSSDForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        name='name'
        type='text'
        id='name'
        onChange={props.onChange}
        value={props.ssd.name}
      />

      <Input
        name='capacity'
        type='number'
        id='capacity'
        onChange={props.onChange}
        value={props.ssd.capacity}
      />

      <Select
        name='interface'
        label='Interface'
        options={['SATA 6Gb/s', 'M.2 SATA 6Gb/s', 'M.2 NVME']}
        onChange={props.onChange}
        value={props.ssd.interface}
      />
      <TextArea
        name='description'
        value={props.ssd.description}
        onChange={props.onChange}
        label='Description'
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.ssd.imageUrl}
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.ssd.price}
      />

      <div class='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>

    </form>
  )
}

export default CreateSSDForm
