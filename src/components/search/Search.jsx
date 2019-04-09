import React from 'react'

function Search (props) {
  return (
    <div className='row bg-primary m-5'>
      <div className='col-md-3'>
        <label htmlFor='searchForName'>Search by name</label>
      </div>
      <div className='col-md-9'>
        <input type='text' id='searchForName' style={{ width: '60%' }} className='bg-warning' onChange={(e) => props.search(e.target.id, e.target.value)} />
      </div>
      <div className='col-md-3'>
        <label htmlFor='searchByPrice1'>Minimum price</label>
      </div>
      <div className='col-md-9'>
        <input type='number' id='searchByPrice1' style={{ width: '20%' }} className='bg-warning' onChange={(e) => props.search(e.target.id, e.target.value)} />
      </div>
      <div className='col-md-3'>
        <label htmlFor='searchByPrice2'>Minimum price</label>
      </div>
      <div className='col-md-9'>
        <input type='number' id='searchByPrice2' style={{ width: '20%' }} className='bg-warning' onChange={(e) => props.search(e.target.id, e.target.value)} />
      </div>
    </div>
  )
}

export default Search
