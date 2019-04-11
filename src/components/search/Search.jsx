import React from 'react'
import SearchForm from '../forms/SearchForm'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: {
        searchName: '',
        minPrice: 0,
        maxPrice: 9999
      }
    }
  }

  render () {
    return (
      <SearchForm search={this.state.search} />
    )
  }
}

export default Search
