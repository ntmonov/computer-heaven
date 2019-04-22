import React from 'react'
import Input from '../common/inputFields/Input'
import Select from '../common/inputFields/Select'
import TextArea from '../common/inputFields/TextArea'

function CreateMainboardForm (props) {
  return (
    <form onSubmit={props.onSubmit}>

      <Input
        name='name'
        type='text'
        id='name'
        onChange={props.onChange}
        value={props.mb.name}
        label='Name'
        error={props.errors.name}
      />

      <Input
        name='chipset'
        type='text'
        id='chipset'
        onChange={props.onChange}
        value={props.mb.chipset}
        label='Chipset'
        error={props.errors.chipset}
      />

      <Select
        name='socket'
        label='Socket'
        options={['1151', 'AM4', '1150']}
        onChange={props.onChange}
        value={props.mb.socket}
      />

      <Select
        name='memorySupported'
        label='Memmory Supported'
        options={['DDR', 'DDR2', 'DDR3', 'DDR4']}
        onChange={props.onChange}
        value={props.mb.memorySupported}
      />

      <TextArea
        name='description'
        value={props.mb.description}
        onChange={props.onChange}
        label='Description'
        error={props.errors.description}
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.mb.imageUrl}
        label='ImageURL (optional)'
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.mb.price}
        error={props.errors.price}

      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>
    </form>
  )
}

export default CreateMainboardForm
