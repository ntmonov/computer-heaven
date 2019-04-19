import React from 'react'
import Input from '../common/inputFields/Input'
import TextArea from '../common/inputFields/TextArea'
import Select from '../common/inputFields/Select'

function CreateDesktopForm (props) {
  return (
    <form onSubmit={props.onSubmit}>

      <Input
        name='name'
        type='text'
        id='name'
        onChange={props.onChange}
        value={props.desktop.name}

      />

      <TextArea
        name='description'
        value={props.desktop.description}
        onChange={props.onChange}
        label='Description'
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.desktop.imageUrl}
      />

      <Input
        name='cpu'
        type='text'
        id='cpu'
        onChange={props.onChange}
        value={props.desktop.cpu}
      />

      <Select
        name='memory'
        label='Memmory Size'
        options={['2GB', '4GB', '8GB', '16GB']}
        onChange={props.onChange}
        value={props.desktop.memory}
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.desktop.price}

      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>
    </form>
  )
}

export default CreateDesktopForm
