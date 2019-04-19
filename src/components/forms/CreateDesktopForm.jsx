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
        label='Name'
        error={props.errors.name}
      />

      <TextArea
        name='description'
        value={props.desktop.description}
        onChange={props.onChange}
        label='Description'
        error={props.errors.description}
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.desktop.imageUrl}
        label='ImageURL (optional)'
      />

      <Input
        name='cpu'
        type='text'
        id='cpu'
        onChange={props.onChange}
        value={props.desktop.cpu}
        label='CPU installed'
        error={props.errors.cpu}
      />

      <Input
        name='video'
        type='text'
        id='video'
        onChange={props.onChange}
        value={props.desktop.video}
        label='Video card installed'
        error={props.errors.video}
      />

      <Select
        name='memory'
        label='Memmory Size'
        options={['2GB', '4GB', '8GB', '16GB']}
        onChange={props.onChange}
        value={props.desktop.memory}
      />

      <Select
        name='psu'
        label='Power Supply'
        options={['400W', '500W', '600W', '800W']}
        onChange={props.onChange}
        value={props.desktop.psu}
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.desktop.price}
        label='Price'
        error={props.errors.price}
      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>
    </form>
  )
}

export default CreateDesktopForm
