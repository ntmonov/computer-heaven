import React from 'react'
import Input from '../common/inputFields/Input'
import TextArea from '../common/inputFields/TextArea'
import Select from '../common/inputFields/Select'

function CreateLaptopForm (props) {
  return (
    <form onSubmit={props.onSubmit}>

      <Input
        name='name'
        type='text'
        id='name'
        onChange={props.onChange}
        value={props.laptop.name}
        error={props.errors.name}
      />

      <TextArea
        name='description'
        value={props.laptop.description}
        onChange={props.onChange}
        label='Description'
        error={props.errors.description}
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        label='ImageUrl (optional)'
        onChange={props.onChange}
        value={props.laptop.imageUrl}
      />

      <Input
        name='cpu'
        type='text'
        id='cpu'
        onChange={props.onChange}
        value={props.laptop.cpu}
        error={props.errors.cpu}
      />

      <Select
        name='memory'
        label='Memmory Size'
        options={['4GB', '8GB', '16GB']}
        onChange={props.onChange}
        value={props.laptop.memory}
      />

      <Select
        name='disk'
        label='Disk Size'
        options={['120GB', '240GB', '500GB', '1TB']}
        onChange={props.onChange}
        value={props.laptop.disk}
      />

      <Input
        name='resolution'
        type='text'
        id='resolution'
        onChange={props.onChange}
        value={props.laptop.resolution}
        error={props.errors.resolution}
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.laptop.price}
        error={props.errors.price}

      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>
    </form>
  )
}

export default CreateLaptopForm
