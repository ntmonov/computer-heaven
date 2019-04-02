import React from 'react'
import Input from '../common/inputFields/Input'
import Select from '../common/inputFields/Select'
import TextArea from '../common/inputFields/TextArea'

function CreateVideoForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        name='name'
        label='Name'
        type='text'
        value={props.video.name}
        onChange={props.onChange}
      />

      <Select
        name='memory'
        label='Memory Capacity'
        options={['2GB', '4GB', '6GB', '8GB']}
        onChange={props.onChange}
        value={props.video.memory}
      />

      <Select
        name='ports'
        multi='true'
        label='Output Ports'
        options={['VGA', 'DVI', 'HDMI', 'DP']}
        onChange={props.onChange}
        value={props.video.ports}
      />

      <TextArea
        name='description'
        value={props.video.description}
        onChange={props.onChange}
        label='Description'
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.video.imageUrl}
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.video.price}
      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>
    </form>
  )
}

export default CreateVideoForm
