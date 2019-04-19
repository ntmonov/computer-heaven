import React from 'react'
import Input from '../common/inputFields/Input'
import TextArea from '../common/inputFields/TextArea'

function CreateLaptopForm (props) {
  return (
    <form onSubmit={props.onSubmit}>

      <Input
        name='name'
        type='text'
        id='name'
        onChange={props.onChange}
        value={props.laptop.name}

      />

      <TextArea
        name='description'
        value={props.laptop.description}
        onChange={props.onChange}
        label='Description'
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.laptop.imageUrl}
      />

      <Input
        name='cpu'
        type='text'
        id='cpu'
        onChange={props.onChange}
        value={props.laptop.cpu}
      />

      <Input
        name='resolution'
        type='text'
        id='resolution'
        onChange={props.onChange}
        value={props.laptop.resolution}
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.laptop.price}

      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>
    </form>
  )
}

export default CreateLaptopForm
