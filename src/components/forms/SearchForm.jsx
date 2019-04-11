import React from 'react'
import Input from '../common/inputFields/Input'

function SearchForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input onChange={props.onChange}
        name='searchName'
        id='searchName'
        type='text'
        value={props.search.searchName}
        label='Search by name'
      />

      <Input onChange={props.onChange}
        name='minPrice'
        id='minPrice'
        type='number'
        value={props.search.minPrice}
        label='Min Price'
      />

      <Input onChange={props.onChange}
        name='maxPrice'
        id='maxPrice'
        type='number'
        value={props.search.maxPrice}
        label='Max Price'
      />
      <div className='form-group row'>
        <input type='submit' className='form-control col-sm-3 offset-sm-4 btn btn-primary' value='Search' />
        <input className='form-control col-sm-3 offset-sm-4 btn btn-primary btn btn-warning' value='Reset' />
      </div>
    </form>
  )
}

export default SearchForm
