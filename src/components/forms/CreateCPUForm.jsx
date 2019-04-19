import React from 'react'
import Input from '../common/inputFields/Input'
import Select from '../common/inputFields/Select'
import TextArea from '../common/inputFields/TextArea'

function CreateCPUForm (props) {
  return (

    <form onSubmit={props.onSubmit}>
      <Input
        name='name'
        type='text'
        id='name'
        onChange={props.onChange}
        value={props.cpu.name}
        error={props.errors.name}
        label='Name'
      />

      <Select
        name='socket'
        label='Socket'
        options={['1151', 'AM4', '1150']}
        onChange={props.onChange}
        value={props.cpu.socket}
      />

      <Input
        name='frequency'
        label='Frequency'
        type='number'
        id='frquency'
        onChange={props.onChange}
        value={props.cpu.frequency}
        error={props.errors.frequency}
      />

      <Input
        name='tdp'
        label='TDP'
        type='number'
        id='tdp'
        onChange={props.onChange}
        value={props.cpu.tdp}
        error={props.errors.tdp}
      />

      <Select
        name='cores'
        label='Number Of Cores'
        options={[2, 4, 6, 8]}
        onChange={props.onChange}
        value={props.cpu.cores}
      />

      <Select
        name='fan'
        label='Fan included'
        options={['Yes', 'No']}
        onChange={props.onChange}
        value={props.cpu.fan}
      />

      <TextArea
        name='description'
        value={props.cpu.description}
        onChange={props.onChange}
        label='Description'
        error={props.errors.description}
      />

      <Input
        name='imageUrl'
        type='text'
        id='imageUrl'
        onChange={props.onChange}
        value={props.cpu.imageUrl}
        label='ImageURL (optional)'
      />

      <Input
        name='price'
        type='number'
        id='price'
        onChange={props.onChange}
        value={props.cpu.price}
        error={props.errors.price}
        label='Price'
      />

      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value={props.submitMsg} />
      </div>

    </form>
  )
}

export default CreateCPUForm
